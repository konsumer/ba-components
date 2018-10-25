// this file was auto-generated

import BABYLON from 'babylonjs'
import Component from '../Component'

// If you want to display a video in your scene, this is the special texture for that.
// This special texture works similar to other textures, with the exception of a few parameters.
export class BaVideoTexture extends Component {
  family = 'materials'
  acceptedProps = ['name', 'src', 'generateMipMaps', 'invertY', 'samplingMode', 'settings']

  render () {
    const { scene } = this.context
    const { name, src, generateMipMaps, invertY, samplingMode, settings } = this.props
    const baRsettings = scene.getNodeByName(settings)
    this.ba = new BABYLON.VideoTexture(name, src, scene, generateMipMaps, invertY, samplingMode, baRsettings)
  }
}

window.customElements.define('ba-video-texture', BaVideoTexture)
