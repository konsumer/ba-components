/* global BABYLON */

// TODO: figure out how to do this in browser
import ColorString from 'color-string'

// get a color3/color4 from a CSS-color (hex, rgb, name, etc)
export const getColor = (c, alpha) => {
  if (typeof c !== 'string') {
    return c
  }
  const [r, g, b] = ColorString.get(c).value
  return typeof alpha !== 'undefined' ? BABYLON.Color4.FromInts(r, g, b, alpha) : BABYLON.Color3.FromInts(r, g, b)
}

// get titlecase of string: "oh COOL, neato" => "Oh Cool, Neato"
export const titleCase = s => {
  const str = s.toLowerCase().split(' ')
  for (let i = 0; i < str.length; i++) {
    str[i] = str[i][0].toUpperCase() + str[i].slice(1).toLowerCase()
  }
  return str.join(' ')
}

export const getDirection = (s) => {

}
