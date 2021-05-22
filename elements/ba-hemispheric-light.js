// this doesn't return, but sets window.BABYLON
import 'babylonjs'
import BaComponent from './ba-component.js'

class BaHemisphericLight extends BaComponent {
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

  constructor () {
    super()
    this.importantObject = new BABYLON.HemisphericLight("_temp", BABYLON.Vector3.Zero(), this.context.scene)
    this.setInitialProps()
  }
}

window.customElements.define('ba-hemispheric-light', BaHemisphericLight)
