// this file was auto-generated

import BABYLON from 'babylonjs'
import Component from '../Component'

// Define a task used by AssetsManager to load HDR cube textures
export class BaHDRCubeTextureAssetTask extends Component {
  family = 'materials'
  acceptedProps = ['name', 'url', 'size', 'noMipmap', 'generateHarmonics', 'gammaSpace', 'reserved']

  render () {
    const { name, url, size, noMipmap, generateHarmonics, gammaSpace, reserved } = this.props
    this.ba = new BABYLON.HDRCubeTextureAssetTask(name, url, size, noMipmap, generateHarmonics, gammaSpace, reserved)

    if (process.env.NODE_ENV === 'development') {
      console.log('BaHDRCubeTextureAssetTask', { props: this.props, context: this.context })
    }
  }
}

window.customElements.define('ba-hdr-cube-texture-asset-task', BaHDRCubeTextureAssetTask)
