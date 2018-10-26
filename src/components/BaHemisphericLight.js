// this file was auto-generated

import BABYLON from 'babylonjs'
import Component from '../Component'

import { getDirection } from '../utils'

// The HemisphericLight simulates the ambient environment light,
// so the passed direction is the light reflection direction, not the incoming direction.
export class BaHemisphericLight extends Component {
  family = 'lights'
  acceptedProps = ['name', 'direction']

  render () {
    const { scene } = this.context
    const { name, direction } = this.props
    const dir = getDirection(direction)
    this.ba = new BABYLON.HemisphericLight(name, dir, scene)

    if (process.env.NODE_ENV === 'development') {
      console.log('BaHemisphericLight', { props: this.props, context: this.context })
    }
  }
}

window.customElements.define('ba-hemispheric-light', BaHemisphericLight)
