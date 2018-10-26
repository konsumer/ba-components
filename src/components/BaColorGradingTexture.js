// this file was auto-generated

import BABYLON from 'babylonjs'
import Component from '../Component'

// This represents a color grading texture. This acts as a lookup table LUT, useful during post process
// It can help converting any input color in a desired output one. This can then be used to create effects
// from sepia, black and white to sixties or futuristic rendering...
//
// The only supported format is currently 3dl.
// More information on LUT: https://en.wikipedia.org/wiki/3D_lookup_table
export class BaColorGradingTexture extends Component {
  family = 'materials'
  acceptedProps = ['url']

  render () {
    const { scene } = this.context
    const { url } = this.props
    this.ba = new BABYLON.ColorGradingTexture(url, scene)

    if (process.env.NODE_ENV === 'development') {
      console.log('BaColorGradingTexture', { props: this.props, context: this.context })
    }
  }
}

window.customElements.define('ba-color-grading-texture', BaColorGradingTexture)
