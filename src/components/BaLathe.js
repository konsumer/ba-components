// this file was auto-generated

import BABYLON from 'babylonjs'
import Component from '../Component'

// Creates lathe mesh.
// The lathe is a shape with a symetry axis : a 2D model shape is rotated around this axis to design the lathe
// The parameter `shape` is a required array of successive Vector3. This array depicts the shape to be rotated in its local space : the shape must be designed in the xOy plane and will be rotated around the Y axis. It's usually a 2D shape, so the Vector3 z coordinates are often set to zero
// The parameter `radius` (positive float, default 1) is the radius value of the lathe
// The parameter `tessellation` (positive integer, default 64) is the side number of the lathe
// The parameter `clip` (positive integer, default 0) is the number of sides to not create without effecting the general shape of the sides
// The parameter `arc` (positive float, default 1) is the ratio of the lathe. 0.5 builds for instance half a lathe, so an opened shape
// The parameter `closed` (boolean, default true) opens/closes the lathe circumference. This should be set to false when used with the parameter "arc"
// The parameter `cap` sets the way the extruded shape is capped. Possible values : BABYLON.Mesh.NO_CAP (default), BABYLON.Mesh.CAP_START, BABYLON.Mesh.CAP_END, BABYLON.Mesh.CAP_ALL
// You can also set the mesh side orientation with the values : BABYLON.Mesh.FRONTSIDE (default), BABYLON.Mesh.BACKSIDE or BABYLON.Mesh.DOUBLESIDE
// If you create a double-sided mesh, you can choose what parts of the texture image to crop and stick respectively on the front and the back sides with the parameters `frontUVs` and `backUVs` (Vector4). Detail here : http://doc.babylonjs.com/babylon101/discover_basic_elements#side-orientation
// The optional parameter `invertUV` (boolean, default false) swaps in the geometry the U and V coordinates to apply a texture
// The mesh can be set to updatable with the boolean parameter `updatable` (default false) if its internal geometry is supposed to change once created
export class BaLathe extends Component {
  family = 'meshes'
  acceptedProps = ['name']

  render () {
    const { scene } = this.context
    const { name } = this.props
    this.ba = BABYLON.MeshBuilder.CreateLathe(name, scene)
  }
}

window.customElements.define('ba-lathe', BaLathe)