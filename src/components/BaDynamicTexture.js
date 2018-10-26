// this file was auto-generated

import BABYLON from 'babylonjs'
import Component from '../Component'

// A class extending Texture allowing drawing on a texture
export class BaDynamicTexture extends Component {
  family = 'materials'
  acceptedProps = ['name', 'options', 'generateMipMaps', 'samplingMode', 'format']

  render () {
    const { scene } = this.context
    const { name, options, generateMipMaps, samplingMode, format } = this.props
    this.ba = new BABYLON.DynamicTexture(name, options, scene, generateMipMaps, samplingMode, format)

    if (process.env.NODE_ENV === 'development') {
      console.log('BaDynamicTexture', { props: this.props, context: this.context })
    }
  }
}

window.customElements.define('ba-dynamic-texture', BaDynamicTexture)
