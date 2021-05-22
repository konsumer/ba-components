import { getColor } from './utils'
import Component from './BAComponent'

export default class BaFollowCamera extends Component {
  family = 'cameras'

  acceptedProps = [
    'animationPropertiesOverride',
    'animations',
    'behaviors',
    'cameraAcceleration',
    'cameraDirection',
    'cameraRigMode',
    'cameraRotation',
    'customRenderTargets',
    'doNotSerialize',
    'fov',
    'fovMode',
    'globalPosition',
    'heightOffset',
    'id',
    'inertia',
    'inputs',
    'interaxialDistance',
    'isIntermediate',
    'isStereoscopicSideBySide',
    'layerMask',
    'leftCamera',
    'lockedTarget',
    'maxCameraSpeed',
    'maxZ',
    'metadata',
    'minZ',
    'mode',
    'name',
    'noRotationConstraint',
    'onAfterCheckInputsObservable',
    'onDispose',
    'onDisposeObservable',
    'onProjectionMatrixChangedObservable',
    'onReady',
    'onRestoreStateObservable',
    'onViewMatrixChangedObservable',
    'orthoBottom',
    'orthoLeft',
    'orthoRight',
    'orthoTop',
    'parent',
    'position',
    'radius',
    'rigPostProcess',
    'rightCamera',
    'rotation',
    'rotationOffset',
    'rotationQuaternion',
    'speed',
    'state',
    'uniqueId',
    'upVector',
    'viewport',
    'worldMatrixFromCache',
    'x',
    'y',
    'z'
  ]

  render () {
    const { name, x = 0, y = 0, z = 0, position, lockedTarget, ...options } = this.props
    const { scene } = this.context
    const pos = position || new BABYLON.Vector3(x, y, z)
    const camera = new BABYLON.FollowCamera(
      name,
      pos,
      scene,
      lockedTarget && scene.getMeshByName(lockedTarget)
    )
    camera.attachControl(this.context.canvas, true)
    Object.keys(options).forEach(p => {
      // handle color props
      if (p.toLowerCase().indexOf('color') !== -1) {
        this.props[p] = getColor(this.props[p])
      }
      camera[p] = options[p]
    })
  }
}

window.customElements.define('ba-follow-camera', BaFollowCamera)