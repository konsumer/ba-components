// this file was auto-generated

import BABYLON from 'babylonjs'
import Component from '../Component'

// Creates a ground mesh
// The parameters `width` and `height` (floats, default 1) set the width and height sizes of the ground
// The parameter `subdivisions` (positive integer) sets the number of subdivisions per side
// The mesh can be set to updatable with the boolean parameter `updatable` (default false) if its internal geometry is supposed to change once created
export class BaGround extends Component {
  family = 'meshes'
  acceptedProps = ['name']

  render () {
    const { scene } = this.context
    const { name } = this.props
    this.ba = BABYLON.MeshBuilder.CreateGround(name, scene)
  }
}

window.customElements.define('ba-ground', BaGround)
