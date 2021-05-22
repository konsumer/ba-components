// this doesn't return, but sets window.BABYLON
import 'babylonjs'
import BaComponent from './ba-component.js'

class BaFollowCamera extends BaComponent {
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

  constructor () {
    super()
    this.setInitialProps()
    const { name, x = 0, y = 0, z = 0, position, lockedTarget, ...options } = this.props
    const { scene, canvas } = this.context
    const pos = position || new BABYLON.Vector3(x, y, z)
    this.importantObject = new BABYLON.FollowCamera(
      name,
      pos,
      scene,
      lockedTarget && scene.getMeshByName(lockedTarget)
    )
    this.importantObject.attachControl(canvas, true)
  }
}

window.customElements.define('ba-follow-camera', BaFollowCamera)
