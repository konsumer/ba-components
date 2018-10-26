// this file was auto-generated

import BABYLON from 'babylonjs'
import Component from '../Component'

import { getPosition } from '../utils'

// Camera used to simulate VR rendering (based on FreeCamera)
export class BaVRDeviceOrientationFreeCamera extends Component {
  family = 'cameras'
  acceptedProps = ['name', 'x', 'y', 'z', 'compensateDistortion']

  render () {
    const { scene } = this.context
    const { name, x, y, z, compensateDistortion } = this.props
    const position = getPosition(x, y, z)
    this.ba = new BABYLON.VRDeviceOrientationFreeCamera(name, position, scene, compensateDistortion)
    this.ba.attachControl(this.context.canvas, true)
    if (process.env.NODE_ENV === 'development') {
      console.log('BaVRDeviceOrientationFreeCamera', { props: this.props, context: this.context })
    }
  }
}

window.customElements.define('ba-vr-device-orientation-free-camera', BaVRDeviceOrientationFreeCamera)
