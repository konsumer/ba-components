// this file was auto-generated

import BABYLON from 'babylonjs'
import Component from '../Component'

// Procedural texturing is a way to programmatically create a texture. There are 2 types of procedural textures: code-only, and code that references some classic 2D images, sometimes called 'refMaps' or 'sampler' images.
// This is the base class of any Procedural texture and contains most of the shareable code.
export class BaProceduralTexture extends Component {
  family = 'materials'
  acceptedProps = ['name', 'size', 'fragment', 'fallbackTexture', 'generateMipMaps', 'isCube']

  render () {
    const { scene } = this.context
    const { name, size, fragment, fallbackTexture, generateMipMaps, isCube } = this.props
    const baRfallbackTexture = scene.getNodeByName(fallbackTexture)
    this.ba = new BABYLON.ProceduralTexture(name, size, fragment, scene, baRfallbackTexture, generateMipMaps, isCube)
  }
}

window.customElements.define('ba-procedural-texture', BaProceduralTexture)
