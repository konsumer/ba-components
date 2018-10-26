// this file was auto-generated

import BABYLON from 'babylonjs'
import Component from '../Component'

// Creates a line system mesh. A line system is a pool of many lines gathered in a single mesh
// A line system mesh is considered as a parametric shape since it has no predefined original shape. Its shape is determined by the passed array of lines as an input parameter
// Like every other parametric shape, it is dynamically updatable by passing an existing instance of LineSystem to this static function
// The parameter `lines` is an array of lines, each line being an array of successive Vector3
// The optional parameter `instance` is an instance of an existing LineSystem object to be updated with the passed `lines` parameter
// The optional parameter `colors` is an array of line colors, each line colors being an array of successive Color4, one per line point
// The optional parameter `useVertexAlpha` is to be set to `false` (default `true`) when you don't need the alpha blending (faster)
// Updating a simple Line mesh, you just need to update every line in the `lines` array : http://doc.babylonjs.com/tutorials/How_to_dynamically_morph_a_mesh#lines-and-dashedlines
// When updating an instance, remember that only line point positions can change, not the number of points, neither the number of lines
// The mesh can be set to updatable with the boolean parameter `updatable` (default false) if its internal geometry is supposed to change once created
export class BaLineSystem extends Component {
  family = 'meshes'
  acceptedProps = ['name']

  render () {
    const { scene } = this.context
    const { name } = this.props
    this.ba = BABYLON.MeshBuilder.CreateLineSystem(name, scene)

    if (process.env.NODE_ENV === 'development') {
      console.log('BaLineSystem', { props: this.props, context: this.context })
    }
  }
}

window.customElements.define('ba-line-system', BaLineSystem)
