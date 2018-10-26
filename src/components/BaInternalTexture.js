// this file was auto-generated

import BABYLON from 'babylonjs'
import Component from '../Component'

// Class used to store data associated with WebGL texture data for the engine
// This class should not be used directly
export class BaInternalTexture extends Component {
  family = 'materials'
  acceptedProps = ['dataSource']

  render () {
    const { engine } = this.context
    const { dataSource } = this.props
    this.ba = new BABYLON.InternalTexture(engine, dataSource)

    if (process.env.NODE_ENV === 'development') {
      console.log('BaInternalTexture', { props: this.props, context: this.context })
    }
  }
}

window.customElements.define('ba-internal-texture', BaInternalTexture)
