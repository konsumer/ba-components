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

// get a direction/named-vector for a string
export const getDirection = d => typeof d !== 'string' ? d : BABYLON.Vector3[titleCase(d)]()

// get a position from position & positional-props
export const getPosition = (x = 0, y = 0, z = 0) => new BABYLON.Vector3(x, y, z)
