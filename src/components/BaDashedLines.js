// this file was auto-generated

import BABYLON from 'babylonjs'
import Component from '../Component'

// Creates a dashed line mesh
// A dashed line mesh is considered as a parametric shape since it has no predefined original shape. Its shape is determined by the passed array of points as an input parameter
// Like every other parametric shape, it is dynamically updatable by passing an existing instance of LineMesh to this static function
// The parameter `points` is an array successive Vector3
// The parameter `dashNb` is the intended total number of dashes (positive integer, default 200)
// The parameter `dashSize` is the size of the dashes relatively the dash number (positive float, default 3)
// The parameter `gapSize` is the size of the gap between two successive dashes relatively the dash number (positive float, default 1)
// The optional parameter `instance` is an instance of an existing LineMesh object to be updated with the passed `points` parameter : http://doc.babylonjs.com/tutorials/How_to_dynamically_morph_a_mesh#lines-and-dashedlines
// When updating an instance, remember that only point positions can change, not the number of points
// The mesh can be set to updatable with the boolean parameter `updatable` (default false) if its internal geometry is supposed to change once created
export class BaDashedLines extends Component {
  family = 'meshes'
  acceptedProps = ['name']

  render () {
    const { scene } = this.context
    const { name } = this.props
    this.ba = BABYLON.MeshBuilder.CreateDashedLines(name, scene)
  }
}

window.customElements.define('ba-dashed-lines', BaDashedLines)
