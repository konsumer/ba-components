// this file was auto-generated

import BABYLON from 'babylonjs'
import Component from '../Component'

// This represents an orbital type of camera.
//
// This camera always points towards a given target position and can be rotated around that target with the target as the centre of rotation. It can be controlled with cursors and mouse, or with touch events.
// Think of this camera as one orbiting its target position, or more imaginatively as a spy satellite orbiting the earth. Its position relative to the target (earth) can be set by three parameters, alpha (radians) the longitudinal rotation, beta (radians) the latitudinal rotation and radius the distance from the target position.
export class BaArcRotateCamera extends Component {
  family = 'cameras'
  acceptedProps = ['name', 'alpha', 'beta', 'radius', 'target', 'setActiveOnSceneIfNoneActive']

  render () {
    const { scene } = this.context
    const { name, alpha, beta, radius, target, setActiveOnSceneIfNoneActive } = this.props
    const baRtarget = scene.getNodeByName(target)
    this.ba = new BABYLON.ArcRotateCamera(name, alpha, beta, radius, baRtarget, scene, setActiveOnSceneIfNoneActive)
    this.ba.attachControl(this.context.canvas, true)
  }
}

window.customElements.define('ba-arc-rotate-camera', BaArcRotateCamera)
