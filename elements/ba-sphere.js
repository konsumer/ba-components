// this doesn't return, but sets window.BABYLON
import 'babylonjs'
import BaComponent from './ba-component.js'

class BaSphere extends BaComponent {
  family = 'meshes'

  static observedAttributes = [
    'backUVs',
    'flat',
    'frontUVs',
    'name',
    'radius',
    'radiusX',
    'radiusY',
    'radiusZ',
    'sideOrientation',
    'subdivisions',
    'updatable',

    'position',
    'x',
    'y',
    'z'
    // TODO: put all mesh props in here, too
  ]

  constructor () {
    super()
    this.setInitialProps()
    const { name, x = 0, y = 0, z = 0, position, ...options } = this.props
    const { scene } = this.context
    const pos = position || new BABYLON.Vector3(x, y, z)
    this.importantObject = BABYLON.MeshBuilder.CreateSphere(name, options, scene)
    this.importantObject.position = pos
  }
}
window.customElements.define('ba-sphere', BaSphere)
