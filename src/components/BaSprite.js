// this file was auto-generated

import BABYLON from 'babylonjs'
import Component from '../Component'

// Class used to represent a sprite
export class BaSprite extends Component {
  family = 'materials'
  acceptedProps = ['name']

  render () {
    const { name } = this.props
    this.ba = new BABYLON.Sprite(name)
  }
}

window.customElements.define('ba-sprite', BaSprite)
