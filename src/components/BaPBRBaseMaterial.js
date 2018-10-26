// this file was auto-generated

import BABYLON from 'babylonjs'
import Component from '../Component'

// The Physically based material base class of BJS.
//
// This offers the main features of a standard PBR material.
// For more information, please refer to the documentation :
// http://doc.babylonjs.com/extensions/Physically_Based_Rendering
export class BaPBRBaseMaterial extends Component {
  family = 'materials'
  acceptedProps = ['name']

  render () {
    const { scene } = this.context
    const { name } = this.props
    this.ba = new BABYLON.PBRBaseMaterial(name, scene)
  }
}

window.customElements.define('ba-pbr-base-material', BaPBRBaseMaterial)