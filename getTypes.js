#!/usr/bin/env babel-node

// this is for playing around with nodes

import ts from 'typescript'
import { inspect } from 'util'
import { walkAST } from './src/generate/utils.js'

const c = (color, s) => {
  const colors = {
    reset: '\x1b[0m',
    green: '\x1b[32m',
    yellow: '\x1b[33m',
    red: '\x1b[31m'
  }
  return colors[color] + s + colors.reset
}

const walkForName = (search, fields) => node => {
  let name = node.name && node.name.getText()

  if (name == search) {
    let currentObject = node
    if (fields) {
      fields.forEach(arg => {
        if (arg && currentObject[arg]) {
          currentObject = currentObject[arg]
        }
      })
      console.log(c('green', name), c('yellow', fields.join('.')), currentObject.kind && (c('red', '(' + ts.SyntaxKind[ currentObject.kind ] + ')')))
    } else {
      console.log(c('green', name), currentObject.kind && (c('red', '(' + ts.SyntaxKind[ currentObject.kind ] + ')')))
    }
    console.log(c('green', Object.keys(currentObject).join(' | ')))
    console.log(inspect(currentObject))
  }
}

let search = process.argv[2]
let fields
if (search.indexOf('.') !== -1) {
  [search, ...fields] = search.split('.')
}
walkAST(`${__dirname}/node_modules/babylonjs/babylon.d.ts`, walkForName(search, fields))
