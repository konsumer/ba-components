// this file was auto-generated

import BABYLON from 'babylonjs'
import Component from '../Component'

// Base class for the main features of a material in Babylon.js
export class BaMaterial extends Component {
  family = 'materials'
  acceptedProps = ['name', 'doNotAdd']

  render () {
    const { scene } = this.context
    const { name, doNotAdd } = this.props
    this.ba = new BABYLON.Material(name, scene, doNotAdd)
  }
}

window.customElements.define('ba-material', BaMaterial)
