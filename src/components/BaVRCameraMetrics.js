// this file was auto-generated

import BABYLON from 'babylonjs'
import Component from '../Component'

// This represents all the required metrics to create a VR camera.
export class BaVRCameraMetrics extends Component {
  family = 'cameras'
  acceptedProps = []

  render () {
    this.ba = new BABYLON.VRCameraMetrics()
    this.ba.attachControl(this.context.canvas, true)
    if (process.env.NODE_ENV === 'development') {
      console.log('BaVRCameraMetrics', { props: this.props, context: this.context })
    }
  }
}

window.customElements.define('ba-vr-camera-metrics', BaVRCameraMetrics)
