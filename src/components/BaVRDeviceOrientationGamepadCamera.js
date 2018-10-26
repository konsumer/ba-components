// this file was auto-generated

import BABYLON from 'babylonjs'
import Component from '../Component'

import { getPosition } from '../utils'

// Camera used to simulate VR rendering (based on VRDeviceOrientationFreeCamera)
export class BaVRDeviceOrientationGamepadCamera extends Component {
  family = 'cameras'
  acceptedProps = ['name', 'x', 'y', 'z', 'compensateDistortion']

  render () {
    const { scene } = this.context
    const { name, x, y, z, compensateDistortion } = this.props
    const position = getPosition(x, y, z)
    this.ba = new BABYLON.VRDeviceOrientationGamepadCamera(name, position, scene, compensateDistortion)
    this.ba.attachControl(this.context.canvas, true)
  }
}

window.customElements.define('ba-vr-device-orientation-gamepad-camera', BaVRDeviceOrientationGamepadCamera)
