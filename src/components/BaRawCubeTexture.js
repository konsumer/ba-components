// this file was auto-generated

import BABYLON from 'babylonjs'
import Component from '../Component'

// Raw cube texture where the raw buffers are passed in
export class BaRawCubeTexture extends Component {
  family = 'materials'
  acceptedProps = ['data', 'size', 'format', 'type', 'generateMipMaps', 'invertY', 'samplingMode', 'compression']

  render () {
    const { scene } = this.context
    const { data, size, format, type, generateMipMaps, invertY, samplingMode, compression } = this.props
    const baRdata = scene.getNodeByName(data)
    const baRcompression = scene.getNodeByName(compression)
    this.ba = new BABYLON.RawCubeTexture(scene, baRdata, size, format, type, generateMipMaps, invertY, samplingMode, baRcompression)
  }
}

window.customElements.define('ba-raw-cube-texture', BaRawCubeTexture)
