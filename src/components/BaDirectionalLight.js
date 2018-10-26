// this file was auto-generated

import BABYLON from 'babylonjs'
import Component from '../Component'

import { getDirection } from '../utils'

// A directional light is defined by a direction (what a surprise!).
// The light is emitted from everywhere in the specified direction, and has an infinite range.
// An example of a directional light is when a distance planet is lit by the apparently parallel lines of light from its sun. Light in a downward direction will light the top of an object.
// Documentation: https://doc.babylonjs.com/babylon101/lights
export class BaDirectionalLight extends Component {
  family = 'lights'
  acceptedProps = ['name', 'direction']

  render () {
    const { scene } = this.context
    const { name, direction } = this.props
    const dir = getDirection(direction)
    this.ba = new BABYLON.DirectionalLight(name, dir, scene)
  }
}

window.customElements.define('ba-directional-light', BaDirectionalLight)
