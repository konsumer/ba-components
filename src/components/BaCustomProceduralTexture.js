// this file was auto-generated

import BABYLON from 'babylonjs'
import Component from '../Component'

// Procedural texturing is a way to programmatically create a texture. There are 2 types of procedural textures: code-only, and code that references some classic 2D images, sometimes called 'refMaps' or 'sampler' images.
// Custom Procedural textures are the easiest way to create your own procedural in your application.
export class BaCustomProceduralTexture extends Component {
  family = 'materials'
  acceptedProps = ['name', 'texturePath', 'size', 'fallbackTexture', 'generateMipMaps']

  render () {
    const { scene } = this.context
    const { name, texturePath, size, fallbackTexture, generateMipMaps } = this.props
    const baRfallbackTexture = scene.getNodeByName(fallbackTexture)
    this.ba = new BABYLON.CustomProceduralTexture(name, texturePath, size, scene, baRfallbackTexture, generateMipMaps)

    if (process.env.NODE_ENV === 'development') {
      console.log('BaCustomProceduralTexture', { props: this.props, context: this.context })
    }
  }
}

window.customElements.define('ba-custom-procedural-texture', BaCustomProceduralTexture)
