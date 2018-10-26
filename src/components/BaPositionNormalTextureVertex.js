// this file was auto-generated

import BABYLON from 'babylonjs'
import Component from '../Component'

import { getPosition } from '../utils'

// Contains position, normal and uv vectors for a vertex
export class BaPositionNormalTextureVertex extends Component {
  family = 'materials'
  acceptedProps = ['x', 'y', 'z']

  render () {
    const { x, y, z } = this.props
    const position = getPosition(x, y, z)
    this.ba = new BABYLON.PositionNormalTextureVertex(position)
  }
}

window.customElements.define('ba-position-normal-texture-vertex', BaPositionNormalTextureVertex)
