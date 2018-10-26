// this file was auto-generated

import BABYLON from 'babylonjs'
import Component from '../Component'

// Class used to host texture specific utilities
export class BaTextureTools extends Component {
  family = 'materials'
  acceptedProps = []

  render () {
    this.ba = new BABYLON.TextureTools()

    if (process.env.NODE_ENV === 'development') {
      console.log('BaTextureTools', { props: this.props, context: this.context })
    }
  }
}

window.customElements.define('ba-texture-tools', BaTextureTools)
