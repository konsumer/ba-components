// this file was auto-generated

import BABYLON from 'babylonjs'
import Component from '../Component'

// Background material used to create an efficient environement around your scene.
export class BaBackgroundMaterial extends Component {
  family = 'materials'
  acceptedProps = ['name']

  render () {
    const { scene } = this.context
    const { name } = this.props
    this.ba = new BABYLON.BackgroundMaterial(name, scene)
  }
}

window.customElements.define('ba-background-material', BaBackgroundMaterial)
