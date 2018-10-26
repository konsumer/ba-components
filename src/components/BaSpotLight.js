// this file was auto-generated

import BABYLON from 'babylonjs'
import Component from '../Component'

import { getPosition, getDirection } from '../utils'

// A spot light is defined by a position, a direction, an angle, and an exponent.
// These values define a cone of light starting from the position, emitting toward the direction.
// The angle, in radians, defines the size (field of illumination) of the spotlight's conical beam,
// and the exponent defines the speed of the decay of the light with distance (reach).
// Documentation: https://doc.babylonjs.com/babylon101/lights
export class BaSpotLight extends Component {
  family = 'lights'
  acceptedProps = ['name', 'x', 'y', 'z', 'direction', 'angle', 'exponent']

  render () {
    const { scene } = this.context
    const { name, x, y, z, direction, angle, exponent } = this.props
    const position = getPosition(x, y, z)
    const dir = getDirection(direction)
    this.ba = new BABYLON.SpotLight(name, position, dir, angle, exponent, scene)
  }
}

window.customElements.define('ba-spot-light', BaSpotLight)
