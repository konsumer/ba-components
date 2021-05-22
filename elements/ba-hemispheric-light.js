import { getColor, getDirection } from './utils'
import Component from './BAComponent'

export default class BaHemisphericLight extends Component {
  family = 'lights'

  acceptedProps = [
    'animationPropertiesOverride',
    'animations',
    'behaviors',
    'diffuse',
    'direction',
    'doNotSerialize',
    'excludeWithLayerMask',
    'excludedMeshes',
    'falloffType',
    'groundColor',
    'id',
    'includeOnlyWithLayerMask',
    'includedOnlyMeshes',
    'intensity',
    'intensityMode',
    'lightmapMode',
    'metadata',
    'name',
    'onDispose',
    'onDisposeObservable',
    'onReady',
    'parent',
    'radius',
    'range',
    'renderPriority',
    'shadowEnabled',
    'specular',
    'state',
    'uniqueId',
    'worldMatrixFromCache'
  ]

  render () {
    const light = new BABYLON.HemisphericLight(this.props.name, BABYLON.Vector3.Zero(), this.context.scene)
    Object.keys(this.props).forEach(p => {
      // handle color props
      if (p.toLowerCase().indexOf('color') !== -1) {
        this.props[p] = getColor(this.props[p])
      }
      // handle direction
      if (p === 'direction') {
        this.props[p] = getDirection(this.props[p])
      }
      light[p] = this.props[p]
    })
  }
}

window.customElements.define('ba-hemispheric-light', BaHemisphericLight)
