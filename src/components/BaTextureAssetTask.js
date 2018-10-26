// this file was auto-generated

import BABYLON from 'babylonjs'
import Component from '../Component'

// Define a task used by AssetsManager to load 2D textures
export class BaTextureAssetTask extends Component {
  family = 'materials'
  acceptedProps = ['name', 'url', 'noMipmap', 'invertY', 'samplingMode']

  render () {
    const { name, url, noMipmap, invertY, samplingMode } = this.props
    this.ba = new BABYLON.TextureAssetTask(name, url, noMipmap, invertY, samplingMode)

    if (process.env.NODE_ENV === 'development') {
      console.log('BaTextureAssetTask', { props: this.props, context: this.context })
    }
  }
}

window.customElements.define('ba-texture-asset-task', BaTextureAssetTask)
