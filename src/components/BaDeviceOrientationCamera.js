// this file was auto-generated

import BABYLON from 'babylonjs'
import Component from '../Component'

import { getPosition } from '../utils'

// This is a camera specifically designed to react to device orientation events such as a modern mobile device
// being tilted forward or back and left or right.
export class BaDeviceOrientationCamera extends Component {
  family = 'cameras'
  acceptedProps = ['name', 'x', 'y', 'z']

  render () {
    const { scene } = this.context
    const { name, x, y, z } = this.props
    const position = getPosition(x, y, z)
    this.ba = new BABYLON.DeviceOrientationCamera(name, position, scene)
    this.ba.attachControl(this.context.canvas, true)
    if (process.env.NODE_ENV === 'development') {
      console.log('BaDeviceOrientationCamera', { props: this.props, context: this.context })
    }
  }
}

window.customElements.define('ba-device-orientation-camera', BaDeviceOrientationCamera)
