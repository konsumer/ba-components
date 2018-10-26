// this file was auto-generated

import BABYLON from 'babylonjs'
import Component from '../Component'

// This represents a texture coming from an HDR input.
//
// The only supported format is currently panorama picture stored in RGBE format.
// Example of such files can be found on HDRLib: http://hdrlib.com/
export class BaHDRCubeTexture extends Component {
  family = 'materials'
  acceptedProps = ['url', 'size', 'noMipmap', 'generateHarmonics', 'gammaSpace', 'reserved', 'onLoad', 'onError']

  render () {
    const { scene } = this.context
    const { url, size, noMipmap, generateHarmonics, gammaSpace, reserved, onLoad, onError } = this.props
    this.ba = new BABYLON.HDRCubeTexture(url, scene, size, noMipmap, generateHarmonics, gammaSpace, reserved, onLoad, onError)
  }
}

window.customElements.define('ba-hdr-cube-texture', BaHDRCubeTexture)
