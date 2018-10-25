import { promisify } from 'util'
import { mkdir } from 'fs'

import { componentFromClass, saveJS } from './utils'
import classInfo from '../../data/classes.json'

// TODO: use base-classes for families?

const md = promisify(mkdir)

export const templates = {}

const header = '// this file was auto-generated\n\n'

// generate the index-file that imports all the components
templates.index = components => header + components.map(c => `import './components/Ba${c}'`).join('\n') + '\n'

// generate a basic component
templates.components = (component) => {
  const baname = `Ba${component.name}`
  const className = component.family === 'meshes' ? `BABYLON.MeshBuilder.Create${component.name}` : `new BABYLON.${component.name}`
  const comment = component.comment
    ? '// ' + component.comment.split('\n').map(l => l.replace(/^[\\ *]+/gm, '')).join('\n// ')
    : `// ${component.name} Component`

  const acceptedProps = []
  const context = []
  const args = []
  const utils = []
  const imports = [`import BABYLON from 'babylonjs'`, `import Component from '../Component'`]
  const beforeDef = []
  const afterDef = []
  let hasColors = false
  let hasReferences = false

  component.args.forEach(a => {
    if (a.name.toLowerCase().indexOf('color') !== -1) {
      hasColors = true
      acceptedProps.push(a.name)
      args.push(`baC${a.name}`)
      utils.push('getColor')
    } else if (a.name === 'position') {
      acceptedProps.push('x')
      acceptedProps.push('y')
      acceptedProps.push('z')
      utils.push('getPosition')
      args.push('position')
    } else if (a.name === 'direction') {
      acceptedProps.push('direction')
      utils.push('getDirection')
      args.push('dir')
    } else if (a.name === 'scene') {
      context.push('scene')
      args.push('scene')
    } else if (a.name === 'engine') {
      context.push('engine')
      args.push('engine')
    } else if (a.name === 'canvasOrContext') {
      args.push('canvas')
    } else if (component.name !== 'Engine' && a.type[0] === a.type[0].toUpperCase()) { // class reference
      hasReferences = true
      acceptedProps.push(a.name)
      args.push(`baR${a.name}`)
      context.push('scene')
    } else {
      acceptedProps.push(a.name)
      args.push(a.name)
    }
  })

  if (utils.length) {
    imports.push(`\nimport { ${[...new Set(utils)].join(', ')} } from '../utils'`)
  }

  if (context.length) {
    beforeDef.push(`const { ${[...new Set(context)].join(', ')} } = this.context`)
  }

  if (acceptedProps.length) {
    beforeDef.push(`const { ${[...new Set(acceptedProps)].join(', ')} } = this.props`)
  }

  if (hasColors || hasReferences) {
    args.forEach(n => {
      if (n.slice(0, 3) === 'baC') {
        const origName = n.slice(3)
        beforeDef.push(`const ${n} = getColor(${origName})`)
      }
      if (n.slice(0, 3) === 'baR') {
        const origName = n.slice(3)
        beforeDef.push(`const ${n} = scene.getNodeByName(${origName})`)
      }
    })
  }

  if (args.indexOf('position') !== -1) {
    beforeDef.push('const position = getPosition(x, y, z)')
  }

  if (args.indexOf('dir') !== -1) {
    beforeDef.push('const dir = getDirection(direction)')
  }

  if (component.name === 'Engine') {
    beforeDef.push(`const canvas = document.createElement('canvas')`)
    beforeDef.push(`canvas.setAttribute('style', 'height: 100%; width: 100%')`)
    beforeDef.push(`this.createShadowRoot()`)
    beforeDef.push(`this.shadowRoot.appendChild(canvas)`)
    afterDef.push(`this.contextAdditions.canvas = canvas`)
    afterDef.push(`this.contextAdditions.engine = this.ba`)
  }

  if (component.name === 'Scene') {
    afterDef.push(`this.contextAdditions.scene = this.ba`)
  }

  return `${header}
${[...new Set(imports)].join('\n')}

${comment}
export class ${baname} extends Component {
  family = '${component.family}'
  acceptedProps = ${JSON.stringify(acceptedProps)}

  render (){
    ${beforeDef.join('\n')}
    this.ba = ${className}(${args})
    ${afterDef.join('\n')}
  }
}

window.customElements.define('${componentFromClass(baname)}', ${baname})
`
}

// async entry-point
async function generateComponents () {
  try {
    await md(`${__dirname}/../components`)
  } catch (e) {}
  const imports = templates.index(Object.values(classInfo).filter(n => n.family !== 'type').map(n => n.name))
  await saveJS(`${__dirname}/../index.js`, imports)
  await Promise.all(Object.values(classInfo).map(c => {
    if (c.family !== 'type') {
      return saveJS(`${__dirname}/../components/Ba${c.name}.js`, templates.components(c))
    }
  }))
}
generateComponents()
