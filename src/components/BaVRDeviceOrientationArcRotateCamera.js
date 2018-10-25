// this file was auto-generated

import BABYLON from 'babylonjs'
import Component from '../Component'

// Camera used to simulate VR rendering (based on ArcRotateCamera)
export class BaVRDeviceOrientationArcRotateCamera extends Component {
  family = 'cameras'
  acceptedProps = ['name', 'alpha', 'beta', 'radius', 'target', 'compensateDistortion', 'vrCameraMetrics']

  render () {
    const { scene } = this.context
    const { name, alpha, beta, radius, target, compensateDistortion, vrCameraMetrics } = this.props
    const baRtarget = scene.getNodeByName(target)
    const baRvrCameraMetrics = scene.getNodeByName(vrCameraMetrics)
    this.ba = new BABYLON.VRDeviceOrientationArcRotateCamera(name, alpha, beta, radius, baRtarget, scene, compensateDistortion, baRvrCameraMetrics)
  }
}

window.customElements.define('ba-vr-device-orientation-arc-rotate-camera', BaVRDeviceOrientationArcRotateCamera)
