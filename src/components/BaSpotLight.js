// this file was auto-generated

import { makeComponentClass } from '../Component'
export const BaSpotLight = makeComponentClass({ 'name': 'SpotLight', 'props': [{ 'name': 'angle', 'type': 'Number' }, { 'name': 'innerAngle', 'type': 'Number' }, { 'name': 'shadowAngleScale', 'type': 'Number' }, { 'name': 'exponent', 'type': 'Number' }, { 'name': 'projectionTextureMatrix', 'type': 'Matrix' }, { 'name': 'projectionTextureLightNear', 'type': 'Number' }, { 'name': 'projectionTextureLightFar', 'type': 'Number' }, { 'name': 'projectionTextureUpDirection', 'type': 'Vector3' }, { 'name': 'projectionTexture', 'type': 'Nullable' }], 'args': [{ 'name': 'name', 'type': 'string' }, { 'name': 'position', 'type': 'Vector3' }, { 'name': 'direction', 'type': 'Vector3' }, { 'name': 'angle', 'type': 'Number' }, { 'name': 'exponent', 'type': 'Number' }, { 'name': 'scene', 'type': 'Scene' }], 'family': 'lights' })
window.customElements.define('ba-spot-light', BaSpotLight)
