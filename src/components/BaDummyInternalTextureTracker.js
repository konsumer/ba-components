// this file was auto-generated

import BABYLON from 'babylonjs'
import Component from '../Component'

// Internal class used by the engine to get list of InternalTexture already bound to the GL context
export class BaDummyInternalTextureTracker extends Component {
  family = 'materials'
  acceptedProps = []

  render () {
    this.ba = new BABYLON.DummyInternalTextureTracker()

    if (process.env.NODE_ENV === 'development') {
      console.log('BaDummyInternalTextureTracker', { props: this.props, context: this.context })
    }
  }
}

window.customElements.define('ba-dummy-internal-texture-tracker', BaDummyInternalTextureTracker)
