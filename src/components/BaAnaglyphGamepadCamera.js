// this file was auto-generated

import BABYLON from 'babylonjs'
import Component from '../Component'

import { getPosition } from '../utils'

// Camera used to simulate anaglyphic rendering (based on GamepadCamera)
export class BaAnaglyphGamepadCamera extends Component {
  family = 'cameras'
  acceptedProps = ['name', 'x', 'y', 'z', 'interaxialDistance']

  render () {
    const { scene } = this.context
    const { name, x, y, z, interaxialDistance } = this.props
    const position = getPosition(x, y, z)
    this.ba = new BABYLON.AnaglyphGamepadCamera(name, position, interaxialDistance, scene)
  }
}

window.customElements.define('ba-anaglyph-gamepad-camera', BaAnaglyphGamepadCamera)
