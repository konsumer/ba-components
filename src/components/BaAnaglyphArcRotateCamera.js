// this file was auto-generated

import BABYLON from 'babylonjs'
import Component from '../Component'

// Camera used to simulate anaglyphic rendering (based on ArcRotateCamera)
export class BaAnaglyphArcRotateCamera extends Component {
  family = 'cameras'
  acceptedProps = ['name', 'alpha', 'beta', 'radius', 'target', 'interaxialDistance']

  render () {
    const { scene } = this.context
    const { name, alpha, beta, radius, target, interaxialDistance } = this.props
    const baRtarget = scene.getNodeByName(target)
    this.ba = new BABYLON.AnaglyphArcRotateCamera(name, alpha, beta, radius, baRtarget, interaxialDistance, scene)
  }
}

window.customElements.define('ba-anaglyph-arc-rotate-camera', BaAnaglyphArcRotateCamera)
