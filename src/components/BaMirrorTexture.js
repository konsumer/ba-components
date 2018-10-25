// this file was auto-generated

import BABYLON from 'babylonjs'
import Component from '../Component'

// Mirror texture can be used to simulate the view from a mirror in a scene.
// It will dynamically be rendered every frame to adapt to the camera point of view.
// You can then easily use it as a reflectionTexture on a flat surface.
// In case the surface is not a plane, please consider relying on reflection probes.
export class BaMirrorTexture extends Component {
  family = 'materials'
  acceptedProps = ['name', 'size', 'generateMipMaps', 'type', 'samplingMode', 'generateDepthBuffer']

  render () {
    const { scene } = this.context
    const { name, size, generateMipMaps, type, samplingMode, generateDepthBuffer } = this.props
    this.ba = new BABYLON.MirrorTexture(name, size, scene, generateMipMaps, type, samplingMode, generateDepthBuffer)
  }
}

window.customElements.define('ba-mirror-texture', BaMirrorTexture)
