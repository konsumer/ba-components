// this file was auto-generated

import BABYLON from 'babylonjs'
import Component from '../Component'

// ActionEvent is the event being sent when an action is triggered.
export class BaActionEvent extends Component {
  family = 'actions'
  acceptedProps = ['source', 'pointerX', 'pointerY', 'meshUnderPointer', 'sourceEvent', 'additionalData']

  render () {
    const { scene } = this.context
    const { source, pointerX, pointerY, meshUnderPointer, sourceEvent, additionalData } = this.props
    const baRmeshUnderPointer = scene.getNodeByName(meshUnderPointer)
    this.ba = new BABYLON.ActionEvent(source, pointerX, pointerY, baRmeshUnderPointer, sourceEvent, additionalData)
  }
}

window.customElements.define('ba-action-event', BaActionEvent)
