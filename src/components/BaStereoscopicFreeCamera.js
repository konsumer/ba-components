// this file was auto-generated

import BABYLON from 'babylonjs'
import Component from '../Component'

import { getPosition } from '../utils'

// Camera used to simulate stereoscopic rendering (based on FreeCamera)
export class BaStereoscopicFreeCamera extends Component {
  family = 'cameras'
  acceptedProps = ['name', 'x', 'y', 'z', 'interaxialDistance', 'isStereoscopicSideBySide']

  render () {
    const { scene } = this.context
    const { name, x, y, z, interaxialDistance, isStereoscopicSideBySide } = this.props
    const position = getPosition(x, y, z)
    this.ba = new BABYLON.StereoscopicFreeCamera(name, position, interaxialDistance, isStereoscopicSideBySide, scene)
  }
}

window.customElements.define('ba-stereoscopic-free-camera', BaStereoscopicFreeCamera)
