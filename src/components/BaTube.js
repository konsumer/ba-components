// this file was auto-generated

import BABYLON from 'babylonjs'
import Component from '../Component'

// Creates a tube mesh.
// The tube is a parametric shape. It has no predefined shape. Its final shape will depend on the input parameters
// The parameter `path` is a required array of successive Vector3. It is the curve used as the axis of the tube
// The parameter `radius` (positive float, default 1) sets the tube radius size
// The parameter `tessellation` (positive float, default 64) is the number of sides on the tubular surface
// The parameter `radiusFunction` (javascript function, default null) is a vanilla javascript function. If it is not null, it overwrittes the parameter `radius`
// This function is called on each point of the tube path and is passed the index `i` of the i-th point and the distance of this point from the first point of the path. It must return a radius value (positive float)
// The parameter `arc` (positive float, maximum 1, default 1) is the ratio to apply to the tube circumference : 2 x PI x arc
// The parameter `cap` sets the way the extruded shape is capped. Possible values : BABYLON.Mesh.NO_CAP (default), BABYLON.Mesh.CAP_START, BABYLON.Mesh.CAP_END, BABYLON.Mesh.CAP_ALL
// The optional parameter `instance` is an instance of an existing Tube object to be updated with the passed `pathArray` parameter : http://doc.babylonjs.com/tutorials/How_to_dynamically_morph_a_mesh#tube
// You can also set the mesh side orientation with the values : BABYLON.Mesh.FRONTSIDE (default), BABYLON.Mesh.BACKSIDE or BABYLON.Mesh.DOUBLESIDE
// If you create a double-sided mesh, you can choose what parts of the texture image to crop and stick respectively on the front and the back sides with the parameters `frontUVs` and `backUVs` (Vector4). Detail here : http://doc.babylonjs.com/babylon101/discover_basic_elements#side-orientation
// The optional parameter `invertUV` (boolean, default false) swaps in the geometry the U and V coordinates to apply a texture
// The mesh can be set to updatable with the boolean parameter `updatable` (default false) if its internal geometry is supposed to change once created
export class BaTube extends Component {
  family = 'meshes'
  acceptedProps = ['name']

  render () {
    const { scene } = this.context
    const { name } = this.props
    this.ba = BABYLON.MeshBuilder.CreateTube(name, scene)

    if (process.env.NODE_ENV === 'development') {
      console.log('BaTube', { props: this.props, context: this.context })
    }
  }
}

window.customElements.define('ba-tube', BaTube)
