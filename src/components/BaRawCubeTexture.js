// this file was auto-generated

import BABYLON from 'babylonjs'
import Component from '../Component'

// Raw cube texture where the raw buffers are passed in
export class BaRawCubeTexture extends Component {
  family = 'materials'
  acceptedProps = ['size', 'format', 'type', 'generateMipMaps', 'invertY', 'samplingMode']

  render () {
    const { scene } = this.context
    const { size, format, type, generateMipMaps, invertY, samplingMode } = this.props
    this.ba = new BABYLON.RawCubeTexture(scene, size, format, type, generateMipMaps, invertY, samplingMode)
  }
}

window.customElements.define('ba-raw-cube-texture', BaRawCubeTexture)
