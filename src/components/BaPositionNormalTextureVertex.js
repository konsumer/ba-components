// this file was auto-generated

import BABYLON from 'babylonjs'
import Component from '../Component'

import { getPosition } from '../utils'

// Contains position, normal and uv vectors for a vertex
export class BaPositionNormalTextureVertex extends Component {
  family = 'materials'
  acceptedProps = ['x', 'y', 'z', 'normal', 'uv']

  render () {
    const { scene } = this.context
    const { x, y, z, normal, uv } = this.props
    const baRnormal = scene.getNodeByName(normal)
    const baRuv = scene.getNodeByName(uv)
    const position = getPosition(x, y, z)
    this.ba = new BABYLON.PositionNormalTextureVertex(position, baRnormal, baRuv)
  }
}

window.customElements.define('ba-position-normal-texture-vertex', BaPositionNormalTextureVertex)
