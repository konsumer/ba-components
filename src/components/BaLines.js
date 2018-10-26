// this file was auto-generated

import BABYLON from 'babylonjs'
import Component from '../Component'

// Creates a line mesh
// A line mesh is considered as a parametric shape since it has no predefined original shape. Its shape is determined by the passed array of points as an input parameter
// Like every other parametric shape, it is dynamically updatable by passing an existing instance of LineMesh to this static function
// The parameter `points` is an array successive Vector3
// The optional parameter `instance` is an instance of an existing LineMesh object to be updated with the passed `points` parameter : http://doc.babylonjs.com/tutorials/How_to_dynamically_morph_a_mesh#lines-and-dashedlines
// The optional parameter `colors` is an array of successive Color4, one per line point
// The optional parameter `useVertexAlpha` is to be set to `false` (default `true`) when you don't need alpha blending (faster)
// When updating an instance, remember that only point positions can change, not the number of points
// The mesh can be set to updatable with the boolean parameter `updatable` (default false) if its internal geometry is supposed to change once created
export class BaLines extends Component {
  family = 'meshes'
  acceptedProps = ['name']

  render () {
    const { scene } = this.context
    const { name } = this.props
    this.ba = BABYLON.MeshBuilder.CreateLines(name, scene)
  }
}

window.customElements.define('ba-lines', BaLines)
