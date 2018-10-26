// this file was auto-generated

import BABYLON from 'babylonjs'
import Component from '../Component'

// Base class of all the lights in Babylon. It groups all the generic information about lights.
// Lights are used, as you would expect, to affect how meshes are seen, in terms of both illumination and colour.
// All meshes allow light to pass through them unless shadow generation is activated. The default number of lights allowed is four but this can be increased.
export class BaLight extends Component {
  family = 'lights'
  acceptedProps = ['name']

  render () {
    const { scene } = this.context
    const { name } = this.props
    this.ba = new BABYLON.Light(name, scene)

    if (process.env.NODE_ENV === 'development') {
      console.log('BaLight', { props: this.props, context: this.context })
    }
  }
}

window.customElements.define('ba-light', BaLight)
