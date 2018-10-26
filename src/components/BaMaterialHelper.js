// this file was auto-generated

import BABYLON from 'babylonjs'
import Component from '../Component'

// "Static Class" containing the most commonly used helper while dealing with material for
// rendering purpose.
//
// It contains the basic tools to help defining defines, binding uniform for the common part of the materials.
//
// This works by convention in BabylonJS but is meant to be use only with shader following the in place naming rules and conventions.
export class BaMaterialHelper extends Component {
  family = 'materials'
  acceptedProps = []

  render () {
    this.ba = new BABYLON.MaterialHelper()
  }
}

window.customElements.define('ba-material-helper', BaMaterialHelper)
