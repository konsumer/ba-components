// this file was auto-generated

import BABYLON from 'babylonjs'
import Component from '../Component'

// Creates a tiled ground mesh
// The parameters `xmin` and `xmax` (floats, default -1 and 1) set the ground minimum and maximum X coordinates
// The parameters `zmin` and `zmax` (floats, default -1 and 1) set the ground minimum and maximum Z coordinates
// The parameter `subdivisions` is a javascript object `{w: positive integer, h: positive integer}` (default `{w: 6, h: 6}`). `w` and `h` are the numbers of subdivisions on the ground width and height. Each subdivision is called a tile
// The parameter `precision` is a javascript object `{w: positive integer, h: positive integer}` (default `{w: 2, h: 2}`). `w` and `h` are the numbers of subdivisions on the ground width and height of each tile
// The mesh can be set to updatable with the boolean parameter `updatable` (default false) if its internal geometry is supposed to change once created.
export class BaTiledGround extends Component {
  family = 'meshes'
  acceptedProps = ['name']

  render () {
    const { scene } = this.context
    const { name } = this.props
    this.ba = BABYLON.MeshBuilder.CreateTiledGround(name, scene)

    if (process.env.NODE_ENV === 'development') {
      console.log('BaTiledGround', { props: this.props, context: this.context })
    }
  }
}

window.customElements.define('ba-tiled-ground', BaTiledGround)
