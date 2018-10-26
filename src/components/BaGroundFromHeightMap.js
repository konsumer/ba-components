// this file was auto-generated

import BABYLON from 'babylonjs'
import Component from '../Component'

// Creates a ground mesh from a height map
// The parameter `url` sets the URL of the height map image resource.
// The parameters `width` and `height` (positive floats, default 10) set the ground width and height sizes.
// The parameter `subdivisions` (positive integer, default 1) sets the number of subdivision per side.
// The parameter `minHeight` (float, default 0) is the minimum altitude on the ground.
// The parameter `maxHeight` (float, default 1) is the maximum altitude on the ground.
// The parameter `colorFilter` (optional Color3, default (0.3, 0.59, 0.11) ) is the filter to apply to the image pixel colors to compute the height.
// The parameter `onReady` is a javascript callback function that will be called  once the mesh is just built (the height map download can last some time).
// The parameter `alphaFilter` will filter any data where the alpha channel is below this value, defaults 0 (all data visible)
// The mesh can be set to updatable with the boolean parameter `updatable` (default false) if its internal geometry is supposed to change once created.
export class BaGroundFromHeightMap extends Component {
  family = 'meshes'
  acceptedProps = ['name', 'url']

  render () {
    const { scene } = this.context
    const { name, url } = this.props
    this.ba = BABYLON.MeshBuilder.CreateGroundFromHeightMap(name, url, scene)

    if (process.env.NODE_ENV === 'development') {
      console.log('BaGroundFromHeightMap', { props: this.props, context: this.context })
    }
  }
}

window.customElements.define('ba-ground-from-height-map', BaGroundFromHeightMap)
