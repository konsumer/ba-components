// this file was auto-generated

import BABYLON from 'babylonjs'
import Component from '../Component'

// Class used to store 3D textures containing user data
export class BaRawTexture3D extends Component {
  family = 'materials'
  acceptedProps = ['data', 'width', 'height', 'depth', 'format', 'generateMipMaps', 'invertY', 'samplingMode', 'textureType']

  render () {
    const { scene } = this.context
    const { data, width, height, depth, format, generateMipMaps, invertY, samplingMode, textureType } = this.props
    const baRdata = scene.getNodeByName(data)
    this.ba = new BABYLON.RawTexture3D(baRdata, width, height, depth, format, scene, generateMipMaps, invertY, samplingMode, textureType)
  }
}

window.customElements.define('ba-raw-texture3-d', BaRawTexture3D)
