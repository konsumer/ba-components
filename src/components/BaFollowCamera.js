// this file was auto-generated

import { makeComponentClass } from '../Component'
export const BaFollowCamera = makeComponentClass({ 'name': 'FollowCamera', 'props': [{ 'name': 'radius', 'type': 'Number' }, { 'name': 'rotationOffset', 'type': 'Number' }, { 'name': 'heightOffset', 'type': 'Number' }, { 'name': 'cameraAcceleration', 'type': 'Number' }, { 'name': 'maxCameraSpeed', 'type': 'Number' }, { 'name': 'lockedTarget', 'type': 'Nullable' }], 'args': [{ 'name': 'name', 'type': 'string' }, { 'name': 'position', 'type': 'Vector3' }, { 'name': 'scene', 'type': 'Scene' }, { 'name': 'lockedTarget', 'type': 'Nullable' }], 'family': 'cameras' })
window.customElements.define('ba-follow-camera', BaFollowCamera)
