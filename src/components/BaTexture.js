// this file was auto-generated

import BABYLON from 'babylonjs'
import Component from '../Component'

// This represents a texture in babylon. It can be easily loaded from a network, base64 or html input.
export class BaTexture extends Component {
  family = 'materials'
  acceptedProps = ['noMipmap', 'invertY', 'samplingMode', 'onLoad', 'onError', 'deleteBuffer', 'format']

  render () {
    const { scene } = this.context
    const { noMipmap, invertY, samplingMode, onLoad, onError, deleteBuffer, format } = this.props
    this.ba = new BABYLON.Texture(scene, noMipmap, invertY, samplingMode, onLoad, onError, deleteBuffer, format)

    if (process.env.NODE_ENV === 'development') {
      console.log('BaTexture', { props: this.props, context: this.context })
    }
  }
}

window.customElements.define('ba-texture', BaTexture)
