// this file was auto-generated

import BABYLON from 'babylonjs'
import Component from '../Component'

import { getPosition } from '../utils'

// Camera used to simulate VR rendering (based on VRDeviceOrientationFreeCamera)
export class BaVRDeviceOrientationGamepadCamera extends Component {
  family = 'cameras'
  acceptedProps = ['name', 'x', 'y', 'z', 'compensateDistortion', 'vrCameraMetrics']

  render () {
    const { scene } = this.context
    const { name, x, y, z, compensateDistortion, vrCameraMetrics } = this.props
    const baRvrCameraMetrics = scene.getNodeByName(vrCameraMetrics)
    const position = getPosition(x, y, z)
    this.ba = new BABYLON.VRDeviceOrientationGamepadCamera(name, position, scene, compensateDistortion, baRvrCameraMetrics)
  }
}

window.customElements.define('ba-vr-device-orientation-gamepad-camera', BaVRDeviceOrientationGamepadCamera)
