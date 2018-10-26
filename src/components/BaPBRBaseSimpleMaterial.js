// this file was auto-generated

import BABYLON from 'babylonjs'
import Component from '../Component'

// The Physically based simple base material of BJS.
//
// This enables better naming and convention enforcements on top of the pbrMaterial.
// It is used as the base class for both the specGloss and metalRough conventions.
export class BaPBRBaseSimpleMaterial extends Component {
  family = 'materials'
  acceptedProps = ['name']

  render () {
    const { scene } = this.context
    const { name } = this.props
    this.ba = new BABYLON.PBRBaseSimpleMaterial(name, scene)
  }
}

window.customElements.define('ba-pbr-base-simple-material', BaPBRBaseSimpleMaterial)
