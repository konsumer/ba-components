import BABYLON from 'babylonjs'

import { getColor } from '../utils'
import Component from '../Component'

export default class BaStandardMaterial extends Component {
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

  render () {
    if (this.parentNode.family !== 'meshes') {
      throw new Error('Materials are only supported as children of meshes, for now.')
    }
    const material = new BABYLON.StandardMaterial(this.props.name, this.context.scene)
    Object.keys(this.props).forEach(p => {
      // handle color props
      if (p.toLowerCase().indexOf('color') !== -1) {
        this.props[p] = getColor(this.props[p])
      }
      material[p] = this.props[p]
    })
    this.parentNode.mesh.material = material
  }
}
