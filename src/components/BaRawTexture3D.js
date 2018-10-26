// this file was auto-generated

import BABYLON from 'babylonjs'
import Component from '../Component'

// Class used to store 3D textures containing user data
export class BaRawTexture3D extends Component {
  family = 'materials'
  acceptedProps = ['width', 'height', 'depth', 'format', 'generateMipMaps', 'invertY', 'samplingMode', 'textureType']

  render () {
    const { scene } = this.context
    const { width, height, depth, format, generateMipMaps, invertY, samplingMode, textureType } = this.props
    this.ba = new BABYLON.RawTexture3D(width, height, depth, format, scene, generateMipMaps, invertY, samplingMode, textureType)

    if (process.env.NODE_ENV === 'development') {
      console.log('BaRawTexture3D', { props: this.props, context: this.context })
    }
  }
}

window.customElements.define('ba-raw-texture3-d', BaRawTexture3D)
