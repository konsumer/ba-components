// this file was auto-generated

import BABYLON from 'babylonjs'
import Component from '../Component'

// Creates a sphere mesh
// The parameter `diameter` sets the diameter size (float) of the sphere (default 1)
// You can set some different sphere dimensions, for instance to build an ellipsoid, by using the parameters `diameterX`, `diameterY` and `diameterZ` (all by default have the same value of `diameter`)
// The parameter `segments` sets the sphere number of horizontal stripes (positive integer, default 32)
// You can create an unclosed sphere with the parameter `arc` (positive float, default 1), valued between 0 and 1, what is the ratio of the circumference (latitude) : 2 x PI x ratio
// You can create an unclosed sphere on its height with the parameter `slice` (positive float, default1), valued between 0 and 1, what is the height ratio (longitude)
// You can also set the mesh side orientation with the values : BABYLON.Mesh.FRONTSIDE (default), BABYLON.Mesh.BACKSIDE or BABYLON.Mesh.DOUBLESIDE
// If you create a double-sided mesh, you can choose what parts of the texture image to crop and stick respectively on the front and the back sides with the parameters `frontUVs` and `backUVs` (Vector4). Detail here : http://doc.babylonjs.com/babylon101/discover_basic_elements#side-orientation
// The mesh can be set to updatable with the boolean parameter `updatable` (default false) if its internal geometry is supposed to change once created
export class BaSphere extends Component {
  family = 'meshes'
  acceptedProps = ['name']

  render () {
    const { scene } = this.context
    const { name } = this.props
    this.ba = BABYLON.MeshBuilder.CreateSphere(name, scene)
  }
}

window.customElements.define('ba-sphere', BaSphere)