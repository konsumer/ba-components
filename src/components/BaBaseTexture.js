// this file was auto-generated

import BABYLON from 'babylonjs'
import Component from '../Component'

// Base class of all the textures in babylon.
// It groups all the common properties the materials, post process, lights... might need
// in order to make a correct use of the texture.
export class BaBaseTexture extends Component {
  family = 'materials'
  acceptedProps = []

  render () {
    const { scene } = this.context
    this.ba = new BABYLON.BaseTexture(scene)

    if (process.env.NODE_ENV === 'development') {
      console.log('BaBaseTexture', { props: this.props, context: this.context })
    }
  }
}

window.customElements.define('ba-base-texture', BaBaseTexture)
