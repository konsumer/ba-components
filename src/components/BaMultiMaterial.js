// this file was auto-generated

import BABYLON from 'babylonjs'
import Component from '../Component'

// A multi-material is used to apply different materials to different parts of the same object without the need of
// separate meshes. This can be use to improve performances.
export class BaMultiMaterial extends Component {
  family = 'materials'
  acceptedProps = ['name']

  render () {
    const { scene } = this.context
    const { name } = this.props
    this.ba = new BABYLON.MultiMaterial(name, scene)

    if (process.env.NODE_ENV === 'development') {
      console.log('BaMultiMaterial', { props: this.props, context: this.context })
    }
  }
}

window.customElements.define('ba-multi-material', BaMultiMaterial)
