// this file was auto-generated

import BABYLON from 'babylonjs'
import Component from '../Component'

import { getPosition } from '../utils'

// This represents a FPS type of camera. This is only here for back compat purpose.
// Please use the UniversalCamera instead as both are identical.
export class BaGamepadCamera extends Component {
  family = 'cameras'
  acceptedProps = ['name', 'x', 'y', 'z']

  render () {
    const { scene } = this.context
    const { name, x, y, z } = this.props
    const position = getPosition(x, y, z)
    this.ba = new BABYLON.GamepadCamera(name, position, scene)
    this.ba.attachControl(this.context.canvas, true)
    if (process.env.NODE_ENV === 'development') {
      console.log('BaGamepadCamera', { props: this.props, context: this.context })
    }
  }
}

window.customElements.define('ba-gamepad-camera', BaGamepadCamera)
