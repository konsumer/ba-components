// this file was auto-generated

import BABYLON from 'babylonjs'
import Component from '../Component'

import { getPosition } from '../utils'

// Camera used to simulate stereoscopic rendering (based on UniversalCamera)
export class BaStereoscopicUniversalCamera extends Component {
  family = 'cameras'
  acceptedProps = ['name', 'x', 'y', 'z', 'interaxialDistance', 'isStereoscopicSideBySide']

  render () {
    const { scene } = this.context
    const { name, x, y, z, interaxialDistance, isStereoscopicSideBySide } = this.props
    const position = getPosition(x, y, z)
    this.ba = new BABYLON.StereoscopicUniversalCamera(name, position, interaxialDistance, isStereoscopicSideBySide, scene)
    this.ba.attachControl(this.context.canvas, true)
  }
}

window.customElements.define('ba-stereoscopic-universal-camera', BaStereoscopicUniversalCamera)
