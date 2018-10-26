// this file was auto-generated

import BABYLON from 'babylonjs'
import Component from '../Component'

// Creates a box mesh
// The parameter `size` sets the size (float) of each box side (default 1)
// You can set some different box dimensions by using the parameters `width`, `height` and `depth` (all by default have the same value of `size`)
// You can set different colors and different images to each box side by using the parameters `faceColors` (an array of 6 Color3 elements) and `faceUV` (an array of 6 Vector4 elements)
// Please read this tutorial : http://doc.babylonjs.com/tutorials/CreateBox_Per_Face_Textures_And_Colors
// You can also set the mesh side orientation with the values : BABYLON.Mesh.FRONTSIDE (default), BABYLON.Mesh.BACKSIDE or BABYLON.Mesh.DOUBLESIDE
// If you create a double-sided mesh, you can choose what parts of the texture image to crop and stick respectively on the front and the back sides with the parameters `frontUVs` and `backUVs` (Vector4). Detail here : http://doc.babylonjs.com/babylon101/discover_basic_elements#side-orientation
// The mesh can be set to updatable with the boolean parameter `updatable` (default false) if its internal geometry is supposed to change once created
export class BaBox extends Component {
  family = 'meshes'
  acceptedProps = ['name']

  render () {
    const { scene } = this.context
    const { name } = this.props
    this.ba = BABYLON.MeshBuilder.CreateBox(name, scene)

    if (process.env.NODE_ENV === 'development') {
      console.log('BaBox', { props: this.props, context: this.context })
    }
  }
}

window.customElements.define('ba-box', BaBox)
