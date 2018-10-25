// this file was auto-generated

import BABYLON from 'babylonjs'
import Component from '../Component'

// This Helps creating a texture that will be created from a camera in your scene.
// It is basically a dynamic texture that could be used to create special effects for instance.
// Actually, It is the base of lot of effects in the framework like post process, shadows, effect layers and rendering pipelines...
export class BaRenderTargetTexture extends Component {
  family = 'materials'
  acceptedProps = ['name', 'size', 'generateMipMaps', 'doNotChangeAspectRatio', 'type', 'isCube', 'samplingMode', 'generateDepthBuffer', 'generateStencilBuffer', 'isMulti', 'format']

  render () {
    const { scene } = this.context
    const { name, size, generateMipMaps, doNotChangeAspectRatio, type, isCube, samplingMode, generateDepthBuffer, generateStencilBuffer, isMulti, format } = this.props
    this.ba = new BABYLON.RenderTargetTexture(name, size, scene, generateMipMaps, doNotChangeAspectRatio, type, isCube, samplingMode, generateDepthBuffer, generateStencilBuffer, isMulti, format)
  }
}

window.customElements.define('ba-render-target-texture', BaRenderTargetTexture)
