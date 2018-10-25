// this file was auto-generated

import BABYLON from 'babylonjs'
import Component from '../Component'

// Defines an optimization used to reduce the size of render target textures
export class BaTextureOptimization extends Component {
  family = 'materials'
  acceptedProps = ['priority', 'maximumSize', 'step']

  render () {
    const { priority, maximumSize, step } = this.props
    this.ba = new BABYLON.TextureOptimization(priority, maximumSize, step)
  }
}

window.customElements.define('ba-texture-optimization', BaTextureOptimization)
