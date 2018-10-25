// this file was auto-generated

import BABYLON from 'babylonjs'
import Component from '../Component'

// for description see https://www.khronos.org/opengles/sdk/tools/KTX/
// for file layout see https://www.khronos.org/opengles/sdk/tools/KTX/file_format_spec/
export class BaKhronosTextureContainer extends Component {
  family = 'materials'
  acceptedProps = ['arrayBuffer', 'facesExpected', 'threeDExpected', 'textureArrayExpected']

  render () {
    const { arrayBuffer, facesExpected, threeDExpected, textureArrayExpected } = this.props
    this.ba = new BABYLON.KhronosTextureContainer(arrayBuffer, facesExpected, threeDExpected, textureArrayExpected)
  }
}

window.customElements.define('ba-khronos-texture-container', BaKhronosTextureContainer)
