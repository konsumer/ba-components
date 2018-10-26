// this file was auto-generated

import BABYLON from 'babylonjs'
import Component from '../Component'

import { getPosition } from '../utils'

// This represents a FPS type of camera controlled by touch.
// This is like a universal camera minus the Gamepad controls.
export class BaTouchCamera extends Component {
  family = 'cameras'
  acceptedProps = ['name', 'x', 'y', 'z']

  render () {
    const { scene } = this.context
    const { name, x, y, z } = this.props
    const position = getPosition(x, y, z)
    this.ba = new BABYLON.TouchCamera(name, position, scene)
    this.ba.attachControl(this.context.canvas, true)
    if (process.env.NODE_ENV === 'development') {
      console.log('BaTouchCamera', { props: this.props, context: this.context })
    }
  }
}

window.customElements.define('ba-touch-camera', BaTouchCamera)
