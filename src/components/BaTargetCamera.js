// this file was auto-generated

import { makeComponentClass } from '../Component'
export const BaTargetCamera = makeComponentClass({ 'name': 'TargetCamera', 'props': [{ 'name': 'cameraDirection', 'type': 'Vector3' }, { 'name': 'cameraRotation', 'type': 'Vector2' }, { 'name': 'rotation', 'type': 'Vector3' }, { 'name': 'rotationQuaternion', 'type': 'Quaternion' }, { 'name': 'speed', 'type': 'Number' }, { 'name': 'noRotationConstraint', 'type': 'Boolean' }, { 'name': 'lockedTarget', 'type': 'Any' }], 'args': [{ 'name': 'name', 'type': 'string' }, { 'name': 'position', 'type': 'Vector3' }, { 'name': 'scene', 'type': 'Scene' }, { 'name': 'setActiveOnSceneIfNoneActive', 'type': 'Boolean' }], 'family': 'cameras' })
window.customElements.define('ba-target-camera', BaTargetCamera)
