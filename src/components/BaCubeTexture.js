// this file was auto-generated

import BABYLON from 'babylonjs'
import Component from '../Component'

// Class for creating a cube texture
export class BaCubeTexture extends Component {
  family = 'materials'
  acceptedProps = ['rootUrl', 'extensions', 'noMipmap', 'files', 'onLoad', 'onError', 'format', 'prefiltered', 'forcedExtension', 'createPolynomials', 'lodScale', 'lodOffset']

  render () {
    const { scene } = this.context
    const { rootUrl, extensions, noMipmap, files, onLoad, onError, format, prefiltered, forcedExtension, createPolynomials, lodScale, lodOffset } = this.props
    const baRextensions = scene.getNodeByName(extensions)
    const baRfiles = scene.getNodeByName(files)
    const baRonLoad = scene.getNodeByName(onLoad)
    const baRonError = scene.getNodeByName(onError)
    this.ba = new BABYLON.CubeTexture(rootUrl, scene, baRextensions, noMipmap, baRfiles, baRonLoad, baRonError, format, prefiltered, forcedExtension, createPolynomials, lodScale, lodOffset)
  }
}

window.customElements.define('ba-cube-texture', BaCubeTexture)
