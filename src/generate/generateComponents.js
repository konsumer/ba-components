import { promisify } from 'util'
import { mkdir } from 'fs'

import { componentFromClass, saveJS } from './utils'
import classInfo from '../../data/classes.json'

const md = promisify(mkdir)

export const templates = {}

const header = '// this file was auto-generated\n\n'

// generate the index-file that imports all the components
templates.index = components => header + components.map(c => `import './components/Ba${c}'`).join('\n') + '\n'

templates.components = (component) => {
  // strip comments
  let { name, family, props, args } = component
  const comp = {
    name,
    props: props.map(({ comment, ...prop }) => prop),
    args: args.map(({ comment, ...arg }) => arg),
    family
  }
  const baname = `Ba${name}`
  return [
    header,
    `import { makeComponentClass } from '../Component'`,
    `export const ${baname} = makeComponentClass(${JSON.stringify(comp)})`,
    `window.customElements.define('${componentFromClass(baname)}', ${baname})`
  ].join('\n')
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
