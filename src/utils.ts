import colorString from 'color-string'
import { Color4, Color3, Vector3 } from 'babylonjs'

// get a color3/color4 from a CSS-color (hex, rgb, name, etc)
export function getColor(c:string, alpha:number) : Color3|Color4 {
  if (typeof c !== 'string') {
    return c
  }
  let [r, g, b] = colorString.get(c).value
  return typeof alpha !== 'undefined' ? Color4.FromInts(r, g, b, alpha) : Color3.FromInts(r, g, b)
}

// get titlecase of string: "oh COOL, neato" => "Oh Cool, Neato"
export function titleCase(s:string) : string {
  const str = s.toLowerCase().split(' ')
  for (var i = 0; i < str.length; i++) {
    str[i] = str[i][0].toUpperCase() + str[i].slice(1).toLowerCase()
  }
  return str.join(' ')
}

// get a direction/named-vector for a string
export function getDirection(d:string) : Vector3 {
  return typeof d !== 'string' ? d : Vector3[titleCase(d)]()
}