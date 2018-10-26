// this file was auto-generated

import BABYLON from 'babylonjs'
import Component from '../Component'

// Represents a scene to be rendered by the engine.
export class BaScene extends Component {
  family = 'system'
  acceptedProps = []

  render () {
    const { engine } = this.context
    this.ba = new BABYLON.Scene(engine)
    this.contextAdditions.scene = this.ba
  }
}

window.customElements.define('ba-scene', BaScene)
