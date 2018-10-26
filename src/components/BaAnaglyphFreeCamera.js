// this file was auto-generated

import BABYLON from 'babylonjs'
import Component from '../Component'

import { getPosition } from '../utils'

// Camera used to simulate anaglyphic rendering (based on FreeCamera)
export class BaAnaglyphFreeCamera extends Component {
  family = 'cameras'
  acceptedProps = ['name', 'x', 'y', 'z', 'interaxialDistance']

  render () {
    const { scene } = this.context
    const { name, x, y, z, interaxialDistance } = this.props
    const position = getPosition(x, y, z)
    this.ba = new BABYLON.AnaglyphFreeCamera(name, position, interaxialDistance, scene)
    this.ba.attachControl(this.context.canvas, true)
    if (process.env.NODE_ENV === 'development') {
      console.log('BaAnaglyphFreeCamera', { props: this.props, context: this.context })
    }
  }
}

window.customElements.define('ba-anaglyph-free-camera', BaAnaglyphFreeCamera)
