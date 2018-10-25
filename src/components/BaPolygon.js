// this file was auto-generated

import BABYLON from 'babylonjs'
import Component from '../Component'

// Creates a polygon mesh
// The polygon's shape will depend on the input parameters and is constructed parallel to a ground mesh
// The parameter `shape` is a required array of successive Vector3 representing the corners of the polygon in th XoZ plane, that is y = 0 for all vectors
// You can set the mesh side orientation with the values : BABYLON.Mesh.FRONTSIDE (default), BABYLON.Mesh.BACKSIDE or BABYLON.Mesh.DOUBLESIDE
// The mesh can be set to updatable with the boolean parameter `updatable` (default false) if its internal geometry is supposed to change once created
// If you create a double-sided mesh, you can choose what parts of the texture image to crop and stick respectively on the front and the back sides with the parameters `frontUVs` and `backUVs` (Vector4)
// Remember you can only change the shape positions, not their number when updating a polygon
export class BaPolygon extends Component {
  family = 'meshes'
  acceptedProps = ['name']

  render () {
    const { scene } = this.context
    const { name } = this.props
    this.ba = BABYLON.MeshBuilder.CreatePolygon(name, scene)
  }
}

window.customElements.define('ba-polygon', BaPolygon)
