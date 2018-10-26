// this file was auto-generated

import BABYLON from 'babylonjs'
import Component from '../Component'

// Base implementation IShadowLight
// It groups all the common behaviour in order to reduce dupplication and better follow the DRY pattern.
export class BaShadowLight extends Component {
  family = 'lights'
  acceptedProps = []

  render () {
    this.ba = new BABYLON.ShadowLight()

    if (process.env.NODE_ENV === 'development') {
      console.log('BaShadowLight', { props: this.props, context: this.context })
    }
  }
}

window.customElements.define('ba-shadow-light', BaShadowLight)
