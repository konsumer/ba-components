// this file was auto-generated

import BABYLON from 'babylonjs'
import Component from '../Component'

// Creates a ribbon mesh. The ribbon is a parametric shape.  It has no predefined shape. Its final shape will depend on the input parameters
// The parameter `pathArray` is a required array of paths, what are each an array of successive Vector3. The pathArray parameter depicts the ribbon geometry
// The parameter `closeArray` (boolean, default false) creates a seam between the first and the last paths of the path array
// The parameter `closePath` (boolean, default false) creates a seam between the first and the last points of each path of the path array
// The parameter `offset` (positive integer, default : rounded half size of the pathArray length), is taken in account only if the `pathArray` is containing a single path
// It's the offset to join the points from the same path. Ex : offset = 10 means the point 1 is joined to the point 11
// The optional parameter `instance` is an instance of an existing Ribbon object to be updated with the passed `pathArray` parameter : http://doc.babylonjs.com/tutorials/How_to_dynamically_morph_a_mesh#ribbon
// You can also set the mesh side orientation with the values : BABYLON.Mesh.FRONTSIDE (default), BABYLON.Mesh.BACKSIDE or BABYLON.Mesh.DOUBLESIDE
// If you create a double-sided mesh, you can choose what parts of the texture image to crop and stick respectively on the front and the back sides with the parameters `frontUVs` and `backUVs` (Vector4). Detail here : http://doc.babylonjs.com/babylon101/discover_basic_elements#side-orientation
// The optional parameter `invertUV` (boolean, default false) swaps in the geometry the U and V coordinates to apply a texture
// The parameter `uvs` is an optional flat array of `Vector2` to update/set each ribbon vertex with its own custom UV values instead of the computed ones
// The parameters `colors` is an optional flat array of `Color4` to set/update each ribbon vertex with its own custom color values
// Note that if you use the parameters `uvs` or `colors`, the passed arrays must be populated with the right number of elements, it is to say the number of ribbon vertices. Remember that if you set `closePath` to `true`, there's one extra vertex per path in the geometry
// Moreover, you can use the parameter `color` with `instance` (to update the ribbon), only if you previously used it at creation time
// The mesh can be set to updatable with the boolean parameter `updatable` (default false) if its internal geometry is supposed to change once created
export class BaRibbon extends Component {
  family = 'meshes'
  acceptedProps = ['name']

  render () {
    const { scene } = this.context
    const { name } = this.props
    this.ba = BABYLON.MeshBuilder.CreateRibbon(name, scene)
  }
}

window.customElements.define('ba-ribbon', BaRibbon)
