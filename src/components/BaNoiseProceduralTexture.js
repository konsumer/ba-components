// this file was auto-generated

import BABYLON from 'babylonjs'
import Component from '../Component'

// Class used to generate noise procedural textures
export class BaNoiseProceduralTexture extends Component {
  family = 'materials'
  acceptedProps = ['name', 'size', 'fallbackTexture', 'generateMipMaps']

  render () {
    const { scene } = this.context
    const { name, size, fallbackTexture, generateMipMaps } = this.props
    const baRfallbackTexture = scene.getNodeByName(fallbackTexture)
    this.ba = new BABYLON.NoiseProceduralTexture(name, size, scene, baRfallbackTexture, generateMipMaps)

    if (process.env.NODE_ENV === 'development') {
      console.log('BaNoiseProceduralTexture', { props: this.props, context: this.context })
    }
  }
}

window.customElements.define('ba-noise-procedural-texture', BaNoiseProceduralTexture)
