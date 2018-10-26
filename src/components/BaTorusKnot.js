// this file was auto-generated

import BABYLON from 'babylonjs'
import Component from '../Component'

// Creates a torus knot mesh
// The parameter `radius` sets the global radius size (float) of the torus knot (default 2)
// The parameter `radialSegments` sets the number of sides on each tube segments (positive integer, default 32)
// The parameter `tubularSegments` sets the number of tubes to decompose the knot into (positive integer, default 32)
// The parameters `p` and `q` are the number of windings on each axis (positive integers, default 2 and 3)
// You can also set the mesh side orientation with the values : BABYLON.Mesh.FRONTSIDE (default), BABYLON.Mesh.BACKSIDE or BABYLON.Mesh.DOUBLESIDE
// If you create a double-sided mesh, you can choose what parts of the texture image to crop and stick respectively on the front and the back sides with the parameters `frontUVs` and `backUVs` (Vector4). Detail here : http://doc.babylonjs.com/babylon101/discover_basic_elements#side-orientation
// The mesh can be set to updatable with the boolean parameter `updatable` (default false) if its internal geometry is supposed to change once created.
export class BaTorusKnot extends Component {
  family = 'meshes'
  acceptedProps = ['name']

  render () {
    const { scene } = this.context
    const { name } = this.props
    this.ba = BABYLON.MeshBuilder.CreateTorusKnot(name, scene)
  }
}

window.customElements.define('ba-torus-knot', BaTorusKnot)
