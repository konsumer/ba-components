// this file was auto-generated

import BABYLON from 'babylonjs'
import Component from '../Component'

// Class used to represent a sprite
export class BaSprite extends Component {
  family = 'materials'
  acceptedProps = ['name', 'manager']

  render () {
    const { scene } = this.context
    const { name, manager } = this.props
    const baRmanager = scene.getNodeByName(manager)
    this.ba = new BABYLON.Sprite(name, baRmanager)
  }
}

window.customElements.define('ba-sprite', BaSprite)
