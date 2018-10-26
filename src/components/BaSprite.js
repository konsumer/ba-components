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

    if (process.env.NODE_ENV === 'development') {
      console.log('BaSprite', { props: this.props, context: this.context })
    }
  }
}

window.customElements.define('ba-sprite', BaSprite)
