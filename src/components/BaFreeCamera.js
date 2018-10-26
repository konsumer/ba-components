// this file was auto-generated

import BABYLON from 'babylonjs'
import Component from '../Component'

import { getPosition } from '../utils'

// This represents a free type of camera. It can be usefull in First Person Shooter game for instance.
// Please consider using the new UniversalCamera instead as it adds more functionality like the gamepad.
export class BaFreeCamera extends Component {
  family = 'cameras'
  acceptedProps = ['name', 'x', 'y', 'z', 'setActiveOnSceneIfNoneActive']

  render () {
    const { scene } = this.context
    const { name, x, y, z, setActiveOnSceneIfNoneActive } = this.props
    const position = getPosition(x, y, z)
    this.ba = new BABYLON.FreeCamera(name, position, scene, setActiveOnSceneIfNoneActive)
    this.ba.attachControl(this.context.canvas, true)
  }
}

window.customElements.define('ba-free-camera', BaFreeCamera)
