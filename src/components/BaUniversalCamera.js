// this file was auto-generated

import BABYLON from 'babylonjs'
import Component from '../Component'

import { getPosition } from '../utils'

// The Universal Camera is the one to choose for first person shooter type games, and works with all the keyboard, mouse, touch and gamepads. This replaces the earlier Free Camera,
// which still works and will still be found in many Playgrounds.
export class BaUniversalCamera extends Component {
  family = 'cameras'
  acceptedProps = ['name', 'x', 'y', 'z']

  render () {
    const { scene } = this.context
    const { name, x, y, z } = this.props
    const position = getPosition(x, y, z)
    this.ba = new BABYLON.UniversalCamera(name, position, scene)
    this.ba.attachControl(this.context.canvas, true)
  }
}

window.customElements.define('ba-universal-camera', BaUniversalCamera)
