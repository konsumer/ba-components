/**
 * Analyze babylonjs source-code to derive component-info
 */

import ts from 'typescript'

import { saveJSON, walkAST } from './utils'

// TODO: still need to get props better. More than args + type-members is showing up in docs
// TODO: add cool props, like shadows and renderList (for things like water)
// TODO: add scene & engine callbacks like BeforeRender

// get a simplified representation of a type
export const getType = thing => {
  if (!thing) {
    return
  }
  const type = thing.typeName ? thing.typeName.getText() : ts.SyntaxKind[thing.kind]
    .replace('Keyword', '')
    .replace('Type', '')
    .toLowerCase()
  if (type === 'array') {
    return [getType(thing.elementType)]
  }
  return type
}

// get the comment for a single node
const getComment = node => node.jsDoc && node.jsDoc[0] && node.jsDoc[0].comment

// find members of a class with a specific kind
const getChildOfKind = (node, kind) => node.members.filter(m => ts.SyntaxKind[m.kind] === kind)

// work out params for a function
const parseParams = (params, classInfo, name) => {
  params.forEach(p => {
    const pname = p.name.getText()
    if (pname === 'name') {
      classInfo[name].args.push({
        'name': 'name',
        'type': 'string'
      })
    } else if (pname === 'scene') {
      classInfo[name].args.push({
        'name': 'scene',
        'type': 'Scene'
      })
    } else if (pname === 'options' && p.type && p.type.members) {
      classInfo[name].options = p.type.members.map(m => {
        return {
          name: m.name.getText(),
          type: getType(m.type)
        }
      })
    } else {
      classInfo[name].args.push({
        name: pname,
        type: getType(p.type)
      })
    }
  })
}

// add a single class as a component
const addClass = (node, name, classInfo) => {
  if (!node) {
    return
  }
  const kind = ts.SyntaxKind[node.kind]
  classInfo[name] = {
    name: name,
    comment: getComment(node),
    args: [],
    return: getType(node.type)
  }
  if (kind === 'ClassDeclaration') {
    const con = getChildOfKind(node, 'Constructor')
    if (con.length) {
      parseParams(con[0].parameters, classInfo, name)
    }
  }
  if (node.parameters) {
    parseParams(node.parameters, classInfo, name)
  }
}

// try to guess the family from
const guessFamily = name => {
  if (name.indexOf('Light') !== -1) {
    return 'lights'
  }

  if (name.indexOf('Camera') !== -1 && name.indexOf('Input') === -1) {
    return 'cameras'
  }

  if ((name.indexOf('Material') !== -1 || name.indexOf('Texture') !== -1 || name.indexOf('Sprite') !== -1) && name.indexOf('Defines') === -1 && name.indexOf('load') !== 0) {
    return 'materials'
  }

  if (name.indexOf('Action') === 0) {
    return 'actions'
  }

  if (name === 'Scene' || name === 'Engine') {
    return 'system'
  }
}

// find all components
const walkComponents = classInfo => node => {
  const name = node.name && node.name.getText()
  if (!name || name[0] === '_' || classInfo[name]) { return }
  const kind = ts.SyntaxKind[node.kind]

  // get mesh-creators
  if (kind === 'MethodDeclaration' && name.slice(0, 6) === 'Create' && node.parent.name.getText() === 'MeshBuilder') {
    const mname = name.replace(/^Create/, '')

    // Get args & options (members of args.options, which will be used as args, later)
    addClass(node, mname, classInfo)
    classInfo[mname].family = 'meshes'
  } else if (kind === 'ClassDeclaration') {
    const family = guessFamily(name)
    if (family) {
      addClass(node, name, classInfo)
      classInfo[name].family = family
    }
  }
}

// find a list of types
const walkTypes = (classInfo, typesToGet) => node => {
  const name = node.name && node.name.getText()
  if (!name || name[0] === '_') { return }
  if (typesToGet.indexOf(name) !== -1) {
    addClass(node, name, classInfo)
    classInfo[name].family = 'type'
  }
}

// async entry-point
async function analyze (inputFile, outputFile) {
  const classInfo = {}
  await walkAST(inputFile, walkComponents(classInfo))
  await walkAST(inputFile, walkTypes(classInfo, [...new Set(Object.values(classInfo).map(c => c.return))].filter(c => c)))
  saveJSON(outputFile, classInfo)
}

analyze(`${__dirname}/../../node_modules/babylonjs/babylon.d.ts`, `${__dirname}/../../data/classes.json`)
