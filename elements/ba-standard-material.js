// this doesn't return, but sets window.BABYLON
import 'babylonjs'
import BaComponent from './ba-component.js'

class BaStandardMaterial extends BaComponent {
  family = 'materials'

  acceptedProps = [
    'alpha',
    'alphaMode',
    'animations',
    'backFaceCulling',
    'checkReadyOnEveryCall',
    'checkReadyOnlyOnce',
    'disableDepthWrite',
    'doNotSerialize',
    'fillMode',
    'fogEnabled',
    'forceDepthWrite',
    'getRenderTargetTextures',
    'hasRenderTargetTextures',
    'isFrozen',
    'name',
    'needDepthPrePass',
    'onBind',
    'onBindObservable',
    'onCompiled',
    'onDispose',
    'onDisposeObservable',
    'onError',
    'onUnBindObservable',
    'pointSize',
    'pointsCloud',
    'separateCullingPass',
    'sideOrientation',
    'state',
    'storeEffectOnSubMeshes',
    'uniqueId',
    'wireframe',
    'zOffset'
  ]

  constructor () {
    super()
    if (this.parentNode.family !== 'meshes') {
      throw new Error('Materials are only supported as children of meshes, for now.')
    }
    this.importantObject = new BABYLON.StandardMaterial("_temp", this.context.scene)
    this.parentNode.importantObject.material = this.importantObject
    this.setInitialProps()
  }
}
window.customElements.define('ba-standard-material', BaStandardMaterial)
