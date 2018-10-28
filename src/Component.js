/* global HTMLElement */

import BABYLON from 'babylonjs'
import ColorString from 'color-string'

// get titlecase of string: "oh COOL, neato" => "Oh Cool, Neato"
export const titleCase = s => {
  const str = s.toLowerCase().split(' ')
  for (var i = 0; i < str.length; i++) {
    str[i] = str[i][0].toUpperCase() + str[i].slice(1).toLowerCase()
  }
  return str.join(' ')
}

// get a color3/color4 from a CSS-color (hex, rgb, name, etc)
export const getColor = (c, alpha) => {
  if (typeof c !== 'string') {
    return c
  }
  let [r, g, b] = ColorString.get(c).value
  return typeof alpha !== 'undefined' ? BABYLON.Color4.FromInts(r, g, b, alpha) : BABYLON.Color3.FromInts(r, g, b)
}

/**
 * Base-class for all components
 */
export class Component extends HTMLElement {
  // you can add to this to share it with children
  contextAdditions = {}

  // since all components use this, give each child the context of it's parent
  get context () {
    return Object.assign({}, this.parentNode.context, this.contextAdditions)
  }

  // called when all components startup
  readyToGo () {
    if (process.env.NODE_ENV === 'development') {
      console.log(this.constructor.name, this)
    }
  }

  // get a value of a prop from attributes, based on type & name
  getVal (name, type) {
    const a = this.getAttribute(name)

    if (a && (name === 'lockedTarget' || name === 'target')) {
      return this.context.scene.getNodeByName(a)
    }

    if (type === 'Color3') {
      return getColor(this.getAttribute(name))
    }
    if (type === 'Vector3') {
      if (a === null) {
        return new BABYLON.Vector3(0, 0, 0)
      }
      // named vectors, like up/down/etc
      if (BABYLON.Vector3[titleCase(a)]) {
        return BABYLON.Vector3[titleCase(a)]()
      }
      const x = this.getAttribute(name + 'X')
      const y = this.getAttribute(name + 'Y')
      const z = this.getAttribute(name + 'Z')
      if (x !== null || y !== null || z !== null) {
        return new BABYLON.Vector3(x || 0, y || 0, z || 0)
      }
    }
    if (name === 'scene') {
      return this.context.scene
    }
    if (name === 'engine') {
      return this.context.engine
    }
    if (name === 'canvas') {
      return this.context.canvas
    }
    return this.getAttribute(name)
  }

  // put vaslue in attributes on to
  updateProps () {
    this.def.props.forEach(p => {
      const a = this.getVal(p.name, p.type)
      if (a !== null) {
        try {
          this.ba[p.name] = a
        } catch (e) {}
      }
    })
  }
}

export const makeComponentClass = (def) => {
  const out = class extends Component {}
  Object.defineProperty(out, 'name', { value: `Ba${def.name}` })
  out.prototype.family = def.family
  out.prototype.def = def

  // TODO: respond to prop updates and component removal
  if (def.name === 'Engine') {
    out.prototype.connectedCallback = function () {
      const cnv = document.createElement('canvas')
      this.contextAdditions.canvas = cnv
      cnv.setAttribute('style', 'height: 100%; width: 100%')
      this.createShadowRoot()
      this.shadowRoot.appendChild(cnv)
      const options = {}
      def.props.forEach(p => {
        const a = this.getAttribute(p.name)
        if (a !== null) {
          options[p.name] = a
        }
      })
      this.ba = new BABYLON.Engine(cnv, this.getAttribute('antialias'), options, this.getAttribute('adaptToDeviceRatio'))
      this.contextAdditions.engine = this.ba
      this.ba.runRenderLoop(() => {
        (this.ba.scenes || []).forEach(scene => {
          if (scene.cameras.length) {
            scene.render()
          }
        })
      })
      this.readyToGo()
    }
  } else if (def.name === 'Scene') {
    out.prototype.connectedCallback = function () {
      this.ba = new BABYLON.Scene(this.context.engine)
      this.contextAdditions.scene = this.ba
      this.updateProps()
      this.readyToGo()
    }
  } else {
    const f = `
      this.ba = new BABYLON.${def.name}(${def.args.map(a => `this.getVal('${a.name}', '${a.type}')`).join(',')})
      ${def.family === 'camera' ? `this.ba.attachControl(this.context.canvas, true)` : ''}
      this.updateProps()
      this.readyToGo()
    `
    out.prototype.connectedCallback = new Function(f)
  }
  return out
}
