// this file was auto-generated

import BABYLON from 'babylonjs'
import Component from '../Component'

// The ShaderMaterial object has the necessary methods to pass data from your scene to the Vertex and Fragment Shaders and returns a material that can be applied to any mesh.
//
// This returned material effects how the mesh will look based on the code in the shaders.
export class BaShaderMaterial extends Component {
  family = 'materials'
  acceptedProps = ['name', 'shaderPath']

  render () {
    const { scene } = this.context
    const { name, shaderPath } = this.props
    this.ba = new BABYLON.ShaderMaterial(name, scene, shaderPath)

    if (process.env.NODE_ENV === 'development') {
      console.log('BaShaderMaterial', { props: this.props, context: this.context })
    }
  }
}

window.customElements.define('ba-shader-material', BaShaderMaterial)
