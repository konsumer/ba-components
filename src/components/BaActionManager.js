// this file was auto-generated

import BABYLON from 'babylonjs'
import Component from '../Component'

// Action Manager manages all events to be triggered on a given mesh or the global scene.
// A single scene can have many Action Managers to handle predefined actions on specific meshes.
export class BaActionManager extends Component {
  family = 'actions'
  acceptedProps = []

  render () {
    const { scene } = this.context
    this.ba = new BABYLON.ActionManager(scene)
  }
}

window.customElements.define('ba-action-manager', BaActionManager)
