// this file was auto-generated

import BABYLON from 'babylonjs'
import Component from '../Component'

// Class used to host texture specific utilities
export class BaTextureTools extends Component {
  family = 'materials'
  acceptedProps = []

  render () {
    this.ba = new BABYLON.TextureTools()
  }
}

window.customElements.define('ba-texture-tools', BaTextureTools)
