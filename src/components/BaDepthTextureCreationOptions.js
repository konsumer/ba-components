// this file was auto-generated

import BABYLON from 'babylonjs'
import Component from '../Component'

// Define options used to create a depth texture
export class BaDepthTextureCreationOptions extends Component {
  family = 'materials'
  acceptedProps = []

  render () {
    this.ba = new BABYLON.DepthTextureCreationOptions()
  }
}

window.customElements.define('ba-depth-texture-creation-options', BaDepthTextureCreationOptions)
