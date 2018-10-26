// this file was auto-generated

import BABYLON from 'babylonjs'
import Component from '../Component'

// The PBR material of BJS following the metal roughness convention.
//
// This fits to the PBR convention in the GLTF definition:
// https://github.com/KhronosGroup/glTF/tree/2.0/specification/2.0
export class BaPBRMetallicRoughnessMaterial extends Component {
  family = 'materials'
  acceptedProps = ['name']

  render () {
    const { scene } = this.context
    const { name } = this.props
    this.ba = new BABYLON.PBRMetallicRoughnessMaterial(name, scene)

    if (process.env.NODE_ENV === 'development') {
      console.log('BaPBRMetallicRoughnessMaterial', { props: this.props, context: this.context })
    }
  }
}

window.customElements.define('ba-pbr-metallic-roughness-material', BaPBRMetallicRoughnessMaterial)
