// this file was auto-generated

import { makeComponentClass } from '../Component'
export const BaLight = makeComponentClass({ 'name': 'Light', 'props': [{ 'name': 'diffuse', 'type': 'Color3' }, { 'name': 'specular', 'type': 'Color3' }, { 'name': 'falloffType', 'type': 'Number' }, { 'name': 'intensity', 'type': 'Number' }, { 'name': 'range', 'type': 'Number' }, { 'name': 'intensityMode', 'type': 'Number' }, { 'name': 'radius', 'type': 'Number' }, { 'name': 'renderPriority', 'type': 'Number' }, { 'name': 'shadowEnabled', 'type': 'Boolean' }, { 'name': 'includedOnlyMeshes', 'type': ['AbstractMesh'] }, { 'name': 'excludedMeshes', 'type': ['AbstractMesh'] }, { 'name': 'excludeWithLayerMask', 'type': 'Number' }, { 'name': 'includeOnlyWithLayerMask', 'type': 'Number' }, { 'name': 'lightmapMode', 'type': 'Number' }], 'args': [{ 'name': 'name', 'type': 'string' }, { 'name': 'scene', 'type': 'Scene' }], 'family': 'lights' })
window.customElements.define('ba-light', BaLight)
