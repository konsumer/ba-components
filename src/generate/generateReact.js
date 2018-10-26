/**
 * Generate linkage to web-compeonts for react-like view-libraries
 */

import { componentFromClass, saveJS } from './utils'
import classInfo from '../../data/classes.json'

export const templates = {}

const header = '// this file was auto-generated'

templates.react = components => [
  header,
  '',
  ...components.map(c => `import './components/Ba${c}'`),
  '',
  ...components.map(c => `export const ${c} = '${componentFromClass(`Ba${c}`)}'`)
].join('\n')

// async entry-point
async function generateReact () {
  const react = templates.react(Object.values(classInfo).filter(n => n.family !== 'type').map(n => n.name))
  await saveJS(`${__dirname}/../react.js`, react)
}
generateReact()
