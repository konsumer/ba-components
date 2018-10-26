// this file was auto-generated

import BABYLON from 'babylonjs'
import Component from '../Component'

// Camera used to simulate VR rendering (based on ArcRotateCamera)
export class BaVRDeviceOrientationArcRotateCamera extends Component {
  family = 'cameras'
  acceptedProps = ['name', 'alpha', 'beta', 'radius', 'target', 'compensateDistortion']

  render () {
    const { scene } = this.context
    const { name, alpha, beta, radius, target, compensateDistortion } = this.props
    const baRtarget = scene.getNodeByName(target)
    this.ba = new BABYLON.VRDeviceOrientationArcRotateCamera(name, alpha, beta, radius, baRtarget, scene, compensateDistortion)
  }
}

window.customElements.define('ba-vr-device-orientation-arc-rotate-camera', BaVRDeviceOrientationArcRotateCamera)
