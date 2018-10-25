// this file was auto-generated

import BABYLON from 'babylonjs'
import Component from '../Component'

// This represents a texture in babylon. It can be easily loaded from a network, base64 or html input.
export class BaTexture extends Component {
  family = 'materials'
  acceptedProps = ['url', 'noMipmap', 'invertY', 'samplingMode', 'onLoad', 'onError', 'buffer', 'deleteBuffer', 'format']

  render () {
    const { scene } = this.context
    const { url, noMipmap, invertY, samplingMode, onLoad, onError, buffer, deleteBuffer, format } = this.props
    const baRurl = scene.getNodeByName(url)
    const baRonLoad = scene.getNodeByName(onLoad)
    const baRonError = scene.getNodeByName(onError)
    const baRbuffer = scene.getNodeByName(buffer)
    this.ba = new BABYLON.Texture(baRurl, scene, noMipmap, invertY, samplingMode, baRonLoad, baRonError, baRbuffer, deleteBuffer, format)
  }
}

window.customElements.define('ba-texture', BaTexture)
