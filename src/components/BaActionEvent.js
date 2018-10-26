// this file was auto-generated

import BABYLON from 'babylonjs'
import Component from '../Component'

// ActionEvent is the event being sent when an action is triggered.
export class BaActionEvent extends Component {
  family = 'actions'
  acceptedProps = ['source', 'pointerX', 'pointerY', 'sourceEvent', 'additionalData']

  render () {
    const { source, pointerX, pointerY, sourceEvent, additionalData } = this.props
    this.ba = new BABYLON.ActionEvent(source, pointerX, pointerY, sourceEvent, additionalData)
  }
}

window.customElements.define('ba-action-event', BaActionEvent)
