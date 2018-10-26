// this file was auto-generated

import BABYLON from 'babylonjs'
import Component from '../Component'

// The action to be carried out following a trigger
export class BaAction extends Component {
  family = 'actions'
  acceptedProps = ['triggerOptions']

  render () {
    const { triggerOptions } = this.props
    this.ba = new BABYLON.Action(triggerOptions)

    if (process.env.NODE_ENV === 'development') {
      console.log('BaAction', { props: this.props, context: this.context })
    }
  }
}

window.customElements.define('ba-action', BaAction)
