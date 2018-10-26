// this file was auto-generated

import BABYLON from 'babylonjs'
import Component from '../Component'

import { getPosition } from '../utils'

// Camera used to simulate stereoscopic rendering (based on GamepadCamera)
export class BaStereoscopicGamepadCamera extends Component {
  family = 'cameras'
  acceptedProps = ['name', 'x', 'y', 'z', 'interaxialDistance', 'isStereoscopicSideBySide']

  render () {
    const { scene } = this.context
    const { name, x, y, z, interaxialDistance, isStereoscopicSideBySide } = this.props
    const position = getPosition(x, y, z)
    this.ba = new BABYLON.StereoscopicGamepadCamera(name, position, interaxialDistance, isStereoscopicSideBySide, scene)
    this.ba.attachControl(this.context.canvas, true)
  }
}

window.customElements.define('ba-stereoscopic-gamepad-camera', BaStereoscopicGamepadCamera)
