import Component from './BAComponent'

export default class BaSphere extends Component {
  family = 'meshes'

  acceptedProps = [
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

  render () {
    const { name, x = 0, y = 0, z = 0, position, ...options } = this.props
    const { scene } = this.context
    const pos = position || new BABYLON.Vector3(x, y, z)
    this.mesh = BABYLON.MeshBuilder.CreateSphere(name, options, scene)
    this.mesh.position = pos
  }
}

window.customElements.define('ba-sphere', BaSphere)