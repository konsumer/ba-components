// this file was auto-generated

import BABYLON from 'babylonjs'
import Component from '../Component'

// Creates a plane mesh
// The parameter `size` sets the size (float) of both sides of the plane at once (default 1)
// You can set some different plane dimensions by using the parameters `width` and `height` (both by default have the same value of `size`)
// The parameter `sourcePlane` is a Plane instance. It builds a mesh plane from a Math plane
// You can also set the mesh side orientation with the values : BABYLON.Mesh.FRONTSIDE (default), BABYLON.Mesh.BACKSIDE or BABYLON.Mesh.DOUBLESIDE
// If you create a double-sided mesh, you can choose what parts of the texture image to crop and stick respectively on the front and the back sides with the parameters `frontUVs` and `backUVs` (Vector4). Detail here : http://doc.babylonjs.com/babylon101/discover_basic_elements#side-orientation
// The mesh can be set to updatable with the boolean parameter `updatable` (default false) if its internal geometry is supposed to change once created
export class BaPlane extends Component {
  family = 'meshes'
  acceptedProps = ['name']

  render () {
    const { scene } = this.context
    const { name } = this.props
    this.ba = BABYLON.MeshBuilder.CreatePlane(name, scene)

    if (process.env.NODE_ENV === 'development') {
      console.log('BaPlane', { props: this.props, context: this.context })
    }
  }
}

window.customElements.define('ba-plane', BaPlane)
