// this file was auto-generated

import BABYLON from 'babylonjs'
import Component from '../Component'

import { getPosition } from '../utils'

// A follow camera takes a mesh as a target and follows it as it moves. Both a free camera version followCamera and
// an arc rotate version arcFollowCamera are available.
export class BaFollowCamera extends Component {
  family = 'cameras'
  acceptedProps = ['name', 'x', 'y', 'z', 'lockedTarget']

  render () {
    const { scene } = this.context
    const { name, x, y, z, lockedTarget } = this.props
    const baRlockedTarget = scene.getNodeByName(lockedTarget)
    const position = getPosition(x, y, z)
    this.ba = new BABYLON.FollowCamera(name, position, scene, baRlockedTarget)
  }
}

window.customElements.define('ba-follow-camera', BaFollowCamera)
