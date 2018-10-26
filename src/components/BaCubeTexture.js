// this file was auto-generated

import BABYLON from 'babylonjs'
import Component from '../Component'

// Class for creating a cube texture
export class BaCubeTexture extends Component {
  family = 'materials'
  acceptedProps = ['rootUrl', 'noMipmap', 'onLoad', 'onError', 'format', 'prefiltered', 'forcedExtension', 'createPolynomials', 'lodScale', 'lodOffset']

  render () {
    const { scene } = this.context
    const { rootUrl, noMipmap, onLoad, onError, format, prefiltered, forcedExtension, createPolynomials, lodScale, lodOffset } = this.props
    this.ba = new BABYLON.CubeTexture(rootUrl, scene, noMipmap, onLoad, onError, format, prefiltered, forcedExtension, createPolynomials, lodScale, lodOffset)

    if (process.env.NODE_ENV === 'development') {
      console.log('BaCubeTexture', { props: this.props, context: this.context })
    }
  }
}

window.customElements.define('ba-cube-texture', BaCubeTexture)
