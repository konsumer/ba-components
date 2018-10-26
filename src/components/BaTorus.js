// this file was auto-generated

import BABYLON from 'babylonjs'
import Component from '../Component'

// Creates a torus mesh
// The parameter `diameter` sets the diameter size (float) of the torus (default 1)
// The parameter `thickness` sets the diameter size of the tube of the torus (float, default 0.5)
// The parameter `tessellation` sets the number of torus sides (postive integer, default 16)
// You can also set the mesh side orientation with the values : BABYLON.Mesh.FRONTSIDE (default), BABYLON.Mesh.BACKSIDE or BABYLON.Mesh.DOUBLESIDE
// If you create a double-sided mesh, you can choose what parts of the texture image to crop and stick respectively on the front and the back sides with the parameters `frontUVs` and `backUVs` (Vector4). Detail here : http://doc.babylonjs.com/babylon101/discover_basic_elements#side-orientation
// The mesh can be set to updatable with the boolean parameter `updatable` (default false) if its internal geometry is supposed to change once created.
export class BaTorus extends Component {
  family = 'meshes'
  acceptedProps = ['name']

  render () {
    const { scene } = this.context
    const { name } = this.props
    this.ba = BABYLON.MeshBuilder.CreateTorus(name, scene)

    if (process.env.NODE_ENV === 'development') {
      console.log('BaTorus', { props: this.props, context: this.context })
    }
  }
}

window.customElements.define('ba-torus', BaTorus)
