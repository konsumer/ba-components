// this file was auto-generated

import BABYLON from 'babylonjs'
import Component from '../Component'

// Creates a refraction texture used by refraction channel of the standard material.
// It is like a mirror but to see through a material.
export class BaRefractionTexture extends Component {
  family = 'materials'
  acceptedProps = ['name', 'size', 'generateMipMaps']

  render () {
    const { scene } = this.context
    const { name, size, generateMipMaps } = this.props
    this.ba = new BABYLON.RefractionTexture(name, size, scene, generateMipMaps)

    if (process.env.NODE_ENV === 'development') {
      console.log('BaRefractionTexture', { props: this.props, context: this.context })
    }
  }
}

window.customElements.define('ba-refraction-texture', BaRefractionTexture)
