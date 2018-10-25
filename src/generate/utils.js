import { writeFile, readFile } from 'fs'
import { promisify } from 'util'
import sortJson from 'sort-json'
import { dasherize, underscore } from 'inflection'
import ts from 'typescript'
import standard from 'standard'

// save file
export const save = promisify(writeFile)

// read a file
export const read = promisify(readFile)

// save alphabetical JSON representation of object to file
export const saveJSON = (name, obj) => save(name, JSON.stringify(sortJson(obj, { depth: 4 }), null, 2))

// save nicely formatted JS
export const saveJS = async (name, text) => {
  const res = standard.lintTextSync(text, { fix: true })
  return save(name, res.results[0].output || text)
}

// get ba-component-here from BaComponentHere
export const componentFromClass = name => dasherize(underscore(name)).replace('-p-b-r-', '-pbr-').replace('-h-d-r-', '-hdr-').replace('-v-r-', '-vr-')

// walk a typescript AST.
export const walkAST = async (inputFile, walker) => {
  const sourceFile = ts.createSourceFile(inputFile, (await read(inputFile)).toString(), ts.ScriptTarget.Latest, true)
  const newWalker = node => {
    node.forEachChild(newWalker)
    walker(node)
  }
  newWalker(sourceFile)
}
