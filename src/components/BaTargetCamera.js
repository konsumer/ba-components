// this file was auto-generated

import BABYLON from 'babylonjs'
import Component from '../Component'

import { getPosition } from '../utils'

// A target camera takes a mesh or position as a target and continues to look at it while it moves.
// This is the base of the follow, arc rotate cameras and Free camera
export class BaTargetCamera extends Component {
  family = 'cameras'
  acceptedProps = ['name', 'x', 'y', 'z', 'setActiveOnSceneIfNoneActive']

  render () {
    const { scene } = this.context
    const { name, x, y, z, setActiveOnSceneIfNoneActive } = this.props
    const position = getPosition(x, y, z)
    this.ba = new BABYLON.TargetCamera(name, position, scene, setActiveOnSceneIfNoneActive)
  }
}

window.customElements.define('ba-target-camera', BaTargetCamera)
