// this file was auto-generated

import BABYLON from 'babylonjs'
import Component from '../Component'

// The engine class is responsible for interfacing with all lower-level APIs such as WebGL and Audio
export class BaEngine extends Component {
  family = 'system'
  acceptedProps = ['antialias', 'options', 'adaptToDeviceRatio']

  render () {
    const { antialias, options, adaptToDeviceRatio } = this.props
    const canvas = document.createElement('canvas')
    canvas.setAttribute('style', 'height: 100%; width: 100%')
    this.createShadowRoot()
    this.shadowRoot.appendChild(canvas)
    this.ba = new BABYLON.Engine(canvas, antialias, options, adaptToDeviceRatio)
    this.contextAdditions.canvas = canvas
    this.contextAdditions.engine = this.ba
    this.ba.runRenderLoop(() => {
      (this.ba.scenes || []).forEach(scene => {
        scene.render()
      })
    })
    if (process.env.NODE_ENV === 'development') {
      console.log('BaEngine', { props: this.props, context: this.context })
    }
  }
}

window.customElements.define('ba-engine', BaEngine)
