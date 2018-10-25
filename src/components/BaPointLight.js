// this file was auto-generated

import BABYLON from 'babylonjs'
import Component from '../Component'

import { getPosition } from '../utils'

// A point light is a light defined by an unique point in world space.
// The light is emitted in every direction from this point.
// A good example of a point light is a standard light bulb.
// Documentation: https://doc.babylonjs.com/babylon101/lights
export class BaPointLight extends Component {
  family = 'lights'
  acceptedProps = ['name', 'x', 'y', 'z']

  render () {
    const { scene } = this.context
    const { name, x, y, z } = this.props
    const position = getPosition(x, y, z)
    this.ba = new BABYLON.PointLight(name, position, scene)
  }
}

window.customElements.define('ba-point-light', BaPointLight)
