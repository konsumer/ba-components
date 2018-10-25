// this file was auto-generated

import BABYLON from 'babylonjs'
import Component from '../Component'

import { getPosition } from '../utils'

// This represents a WebVR camera.
// The WebVR camera is Babylon's simple interface to interaction with Windows Mixed Reality, HTC Vive and Oculus Rift.
export class BaWebVRFreeCamera extends Component {
  family = 'cameras'
  acceptedProps = ['name', 'x', 'y', 'z', 'webVROptions']

  render () {
    const { scene } = this.context
    const { name, x, y, z, webVROptions } = this.props
    const baRwebVROptions = scene.getNodeByName(webVROptions)
    const position = getPosition(x, y, z)
    this.ba = new BABYLON.WebVRFreeCamera(name, position, scene, baRwebVROptions)
  }
}

window.customElements.define('ba-web-vr-free-camera', BaWebVRFreeCamera)
