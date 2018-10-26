// this file was auto-generated

import BABYLON from 'babylonjs'
import Component from '../Component'

// Base class of materials working in push mode in babylon JS
export class BaPushMaterial extends Component {
  family = 'materials'
  acceptedProps = ['name']

  render () {
    const { scene } = this.context
    const { name } = this.props
    this.ba = new BABYLON.PushMaterial(name, scene)
  }
}

window.customElements.define('ba-push-material', BaPushMaterial)