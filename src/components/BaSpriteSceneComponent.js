// this file was auto-generated

import BABYLON from 'babylonjs'
import Component from '../Component'

// Defines the sprite scene component responsible to manage sprites
// in a given scene.
export class BaSpriteSceneComponent extends Component {
  family = 'materials'
  acceptedProps = []

  render () {
    const { scene } = this.context
    this.ba = new BABYLON.SpriteSceneComponent(scene)
  }
}

window.customElements.define('ba-sprite-scene-component', BaSpriteSceneComponent)
