// this file was auto-generated

import BABYLON from 'babylonjs'
import Component from '../Component'

// The action to be carried out following a trigger
export class BaAction extends Component {
  family = 'actions'
  acceptedProps = ['triggerOptions', 'condition']

  render () {
    const { scene } = this.context
    const { triggerOptions, condition } = this.props
    const baRcondition = scene.getNodeByName(condition)
    this.ba = new BABYLON.Action(triggerOptions, baRcondition)
  }
}

window.customElements.define('ba-action', BaAction)
