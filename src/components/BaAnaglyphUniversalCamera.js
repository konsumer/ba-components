// this file was auto-generated

import BABYLON from 'babylonjs'
import Component from '../Component'

import { getPosition } from '../utils'

// Camera used to simulate anaglyphic rendering (based on UniversalCamera)
export class BaAnaglyphUniversalCamera extends Component {
  family = 'cameras'
  acceptedProps = ['name', 'x', 'y', 'z', 'interaxialDistance']

  render () {
    const { scene } = this.context
    const { name, x, y, z, interaxialDistance } = this.props
    const position = getPosition(x, y, z)
    this.ba = new BABYLON.AnaglyphUniversalCamera(name, position, interaxialDistance, scene)
    this.ba.attachControl(this.context.canvas, true)
    if (process.env.NODE_ENV === 'development') {
      console.log('BaAnaglyphUniversalCamera', { props: this.props, context: this.context })
    }
  }
}

window.customElements.define('ba-anaglyph-universal-camera', BaAnaglyphUniversalCamera)
