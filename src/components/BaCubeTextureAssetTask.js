// this file was auto-generated

import BABYLON from 'babylonjs'
import Component from '../Component'

// Define a task used by AssetsManager to load cube textures
export class BaCubeTextureAssetTask extends Component {
  family = 'materials'
  acceptedProps = ['name', 'url', 'extensions', 'noMipmap', 'files']

  render () {
    const { name, url, extensions, noMipmap, files } = this.props
    this.ba = new BABYLON.CubeTextureAssetTask(name, url, extensions, noMipmap, files)
  }
}

window.customElements.define('ba-cube-texture-asset-task', BaCubeTextureAssetTask)