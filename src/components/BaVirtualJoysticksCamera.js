// this file was auto-generated

import BABYLON from 'babylonjs'
import Component from '../Component'

import { getPosition } from '../utils'

// This represents a free type of camera. It can be usefull in First Person Shooter game for instance.
// It is identical to the Free Camera and simply adds by default a virtual joystick.
// Virtual Joysticks are on-screen 2D graphics that are used to control the camera or other scene items.
export class BaVirtualJoysticksCamera extends Component {
  family = 'cameras'
  acceptedProps = ['name', 'x', 'y', 'z']

  render () {
    const { scene } = this.context
    const { name, x, y, z } = this.props
    const position = getPosition(x, y, z)
    this.ba = new BABYLON.VirtualJoysticksCamera(name, position, scene)
    this.ba.attachControl(this.context.canvas, true)
    if (process.env.NODE_ENV === 'development') {
      console.log('BaVirtualJoysticksCamera', { props: this.props, context: this.context })
    }
  }
}

window.customElements.define('ba-virtual-joysticks-camera', BaVirtualJoysticksCamera)
