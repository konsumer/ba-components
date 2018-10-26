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

    if (process.env.NODE_ENV === 'development') {
      console.log('BaSpriteSceneComponent', { props: this.props, context: this.context })
    }
  }
}

window.customElements.define('ba-sprite-scene-component', BaSpriteSceneComponent)
