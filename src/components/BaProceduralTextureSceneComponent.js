// this file was auto-generated

import BABYLON from 'babylonjs'
import Component from '../Component'

// Defines the Procedural Texture scene component responsible to manage any Procedural Texture
// in a given scene.
export class BaProceduralTextureSceneComponent extends Component {
  family = 'materials'
  acceptedProps = []

  render () {
    const { scene } = this.context
    this.ba = new BABYLON.ProceduralTextureSceneComponent(scene)
  }
}

window.customElements.define('ba-procedural-texture-scene-component', BaProceduralTextureSceneComponent)
