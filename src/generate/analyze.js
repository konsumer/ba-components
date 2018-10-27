import ts from 'typescript'

import { saveJSON, walkAST } from './utils'

// try to guess the family from name-string
// and also track all class-types we care about
const guessFamily = name => {
  if (name.indexOf('Light') !== -1) {
    return 'lights'
  }

  if (name.indexOf('Camera') !== -1 && name.indexOf('Input') === -1) {
    return 'cameras'
  }

  if ((name.indexOf('Material') !== -1 || name.indexOf('Texture') !== -1 || name.indexOf('Sprite') !== -1) && name.indexOf('Defines') === -1 && name.indexOf('load') !== 0 && name.indexOf('Tools') === -1) {
    return 'materials'
  }

  if (name.indexOf('Action') === 0) {
    return 'actions'
  }

  if (name === 'Scene' || name === 'Engine') {
    return 'system'
  }
}

// get a simplified representation of a type
export const getType = thing => {
  if (!thing) {
    return
  }
  const type = thing.typeName ? thing.typeName.getText() : ts.SyntaxKind[thing.kind]
    .replace('Keyword', '')
    .replace('Type', '')
  if (type === 'Array') {
    return [getType(thing.elementType)]
  }
  return type
}

// get the comment for a single node
const getComment = node => node.jsDoc && node.jsDoc[0] && node.jsDoc[0].comment

// find members of a class with a specific kind
const getChildOfKind = (node, kind) => node.members.filter(m => ts.SyntaxKind[m.kind] === kind)

// work out params for a function
const parseParams = (params, classInfo, name, type = 'args') => {
  params.forEach(p => {
    const pname = p.name.getText()
    if (pname === 'name') {
      classInfo[name][type].push({
        name: 'name',
        type: 'string',
        comment: getComment(p)
      })
    } else if (pname === 'scene') {
      classInfo[name][type].push({
        name: 'scene',
        type: 'Scene',
        comment: getComment(p)
      })
    } else if (pname === 'options' && p.type && p.type.members) {
      classInfo[name].options = p.type.members.map(m => {
        return {
          name: m.name.getText(),
          type: getType(m.type),
          comment: getComment(m)
        }
      })
    } else {
      classInfo[name][type].push({
        name: pname,
        type: getType(p.type),
        comment: getComment(p)
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
  const realName = node.name && node.name.getText()
  classInfo[name] = {
    name: realName,
    comment: getComment(node),
    args: [],
    props: [],
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
  if (node.members) {
    parseParams(node.members.filter(m => {
      const mname = m.name && m.name.escapedText
      return ts.SyntaxKind[m.kind] === 'PropertyDeclaration' && mname[0].toUpperCase() !== mname[0]
    }), classInfo, name, 'props')
  }
}

// find all components
const walkComponents = classInfo => node => {
  const name = node.name && node.name.getText()

  // get mesh-creators
  if (ts.SyntaxKind[node.kind] === 'MethodDeclaration' && name.slice(0, 6) === 'Create' && node.parent.name.getText() === 'MeshBuilder') {
    const mname = name.replace(/^Create/, '')

    // Get args & options (members of args.options, which will be used as args, later)
    addClass(node, mname, classInfo)
    classInfo[mname].family = 'meshes'
  }

  if (!node || !node.name || ts.SyntaxKind[node.kind] !== 'ClassDeclaration') {
    return
  }

  const family = guessFamily(name)
  if (!family) {
    return
  }

  addClass(node, name, classInfo)
  classInfo[name].family = family
}

const analyze = async (inputFile, outputFile) => {
  const classes = {}
  await walkAST(inputFile, walkComponents(classes))
  saveJSON(outputFile, classes)
}
analyze(`${__dirname}/../../node_modules/babylonjs/babylon.d.ts`, `${__dirname}/../../data/classes.json`)
