// this file was auto-generated

import BABYLON from 'babylonjs'
import Component from '../Component'

// Creates a decal mesh.
// A decal is a mesh usually applied as a model onto the surface of another mesh. So don't forget the parameter `sourceMesh` depicting the decal
// The parameter `position` (Vector3, default `(0, 0, 0)`) sets the position of the decal in World coordinates
// The parameter `normal` (Vector3, default `Vector3.Up`) sets the normal of the mesh where the decal is applied onto in World coordinates
// The parameter `size` (Vector3, default `(1, 1, 1)`) sets the decal scaling
// The parameter `angle` (float in radian, default 0) sets the angle to rotate the decal
export class BaDecal extends Component {
  family = 'meshes'
  acceptedProps = ['name']

  render () {
    const { name } = this.props
    this.ba = BABYLON.MeshBuilder.CreateDecal(name)
  }
}

window.customElements.define('ba-decal', BaDecal)
