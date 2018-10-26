// this file was auto-generated

import BABYLON from 'babylonjs'
import Component from '../Component'

// Raw texture can help creating a texture directly from an array of data.
// This can be super useful if you either get the data from an uncompressed source or
// if you wish to create your texture pixel by pixel.
export class BaRawTexture extends Component {
  family = 'materials'
  acceptedProps = ['width', 'height', 'format', 'generateMipMaps', 'invertY', 'samplingMode', 'type']

  render () {
    const { scene } = this.context
    const { width, height, format, generateMipMaps, invertY, samplingMode, type } = this.props
    this.ba = new BABYLON.RawTexture(width, height, format, scene, generateMipMaps, invertY, samplingMode, type)
  }
}

window.customElements.define('ba-raw-texture', BaRawTexture)
