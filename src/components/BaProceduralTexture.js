// this file was auto-generated

import { makeComponentClass } from '../Component'
export const BaProceduralTexture = makeComponentClass({ 'name': 'ProceduralTexture', 'props': [{ 'name': 'isCube', 'type': 'Boolean' }, { 'name': 'isEnabled', 'type': 'Boolean' }, { 'name': 'autoClear', 'type': 'Boolean' }, { 'name': 'onGenerated', 'type': 'Function' }, { 'name': 'onGeneratedObservable', 'type': 'Observable' }, { 'name': 'refreshRate', 'type': 'Number' }], 'args': [{ 'name': 'name', 'type': 'string' }, { 'name': 'size', 'type': 'Any' }, { 'name': 'fragment', 'type': 'Any' }, { 'name': 'scene', 'type': 'Scene' }, { 'name': 'fallbackTexture', 'type': 'Nullable' }, { 'name': 'generateMipMaps', 'type': 'Boolean' }, { 'name': 'isCube', 'type': 'Boolean' }], 'family': 'materials' })
window.customElements.define('ba-procedural-texture', BaProceduralTexture)
