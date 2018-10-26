// this file was auto-generated

import BABYLON from 'babylonjs'
import Component from '../Component'

// Camera used to simulate stereoscopic rendering (based on ArcRotateCamera)
export class BaStereoscopicArcRotateCamera extends Component {
  family = 'cameras'
  acceptedProps = ['name', 'alpha', 'beta', 'radius', 'target', 'interaxialDistance', 'isStereoscopicSideBySide']

  render () {
    const { scene } = this.context
    const { name, alpha, beta, radius, target, interaxialDistance, isStereoscopicSideBySide } = this.props
    const baRtarget = scene.getNodeByName(target)
    this.ba = new BABYLON.StereoscopicArcRotateCamera(name, alpha, beta, radius, baRtarget, interaxialDistance, isStereoscopicSideBySide, scene)
    this.ba.attachControl(this.context.canvas, true)
    if (process.env.NODE_ENV === 'development') {
      console.log('BaStereoscopicArcRotateCamera', { props: this.props, context: this.context })
    }
  }
}

window.customElements.define('ba-stereoscopic-arc-rotate-camera', BaStereoscopicArcRotateCamera)
