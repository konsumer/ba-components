// this file was auto-generated

import BABYLON from 'babylonjs'
import Component from '../Component'

import { getPosition } from '../utils'

// This is the base class of all the camera used in the application.
export class BaCamera extends Component {
  family = 'cameras'
  acceptedProps = ['name', 'x', 'y', 'z', 'setActiveOnSceneIfNoneActive']

  render () {
    const { scene } = this.context
    const { name, x, y, z, setActiveOnSceneIfNoneActive } = this.props
    const position = getPosition(x, y, z)
    this.ba = new BABYLON.Camera(name, position, scene, setActiveOnSceneIfNoneActive)
    this.ba.attachControl(this.context.canvas, true)
  }
}

window.customElements.define('ba-camera', BaCamera)
