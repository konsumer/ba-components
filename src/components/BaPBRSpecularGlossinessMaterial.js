// this file was auto-generated

import BABYLON from 'babylonjs'
import Component from '../Component'

// The PBR material of BJS following the specular glossiness convention.
//
// This fits to the PBR convention in the GLTF definition:
// https://github.com/KhronosGroup/glTF/tree/2.0/extensions/Khronos/KHR_materials_pbrSpecularGlossiness
export class BaPBRSpecularGlossinessMaterial extends Component {
  family = 'materials'
  acceptedProps = ['name']

  render () {
    const { scene } = this.context
    const { name } = this.props
    this.ba = new BABYLON.PBRSpecularGlossinessMaterial(name, scene)
  }
}

window.customElements.define('ba-pbr-specular-glossiness-material', BaPBRSpecularGlossinessMaterial)
