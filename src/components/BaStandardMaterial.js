// this file was auto-generated

import BABYLON from 'babylonjs'
import Component from '../Component'

// This is the default material used in Babylon. It is the best trade off between quality
// and performances.
export class BaStandardMaterial extends Component {
  family = 'materials'
  acceptedProps = ['name']

  render () {
    const { scene } = this.context
    const { name } = this.props
    this.ba = new BABYLON.StandardMaterial(name, scene)

    if (process.env.NODE_ENV === 'development') {
      console.log('BaStandardMaterial', { props: this.props, context: this.context })
    }
  }
}

window.customElements.define('ba-standard-material', BaStandardMaterial)
