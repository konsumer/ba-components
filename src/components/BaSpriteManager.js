// this file was auto-generated

import BABYLON from 'babylonjs'
import Component from '../Component'

// Class used to manage multiple sprites on the same spritesheet
export class BaSpriteManager extends Component {
  family = 'materials'
  acceptedProps = ['name', 'imgUrl', 'capacity', 'cellSize', 'epsilon', 'samplingMode']

  render () {
    const { scene } = this.context
    const { name, imgUrl, capacity, cellSize, epsilon, samplingMode } = this.props
    this.ba = new BABYLON.SpriteManager(name, imgUrl, capacity, cellSize, scene, epsilon, samplingMode)
  }
}

window.customElements.define('ba-sprite-manager', BaSpriteManager)
