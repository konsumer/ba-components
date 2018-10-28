// this file was auto-generated

import { makeComponentClass } from '../Component'
export const BaMirrorTexture = makeComponentClass({ 'name': 'MirrorTexture', 'props': [{ 'name': 'scene', 'type': 'Scene' }, { 'name': 'mirrorPlane', 'type': 'Plane' }, { 'name': 'blurRatio', 'type': 'Number' }, { 'name': 'adaptiveBlurKernel', 'type': 'Number' }, { 'name': 'blurKernel', 'type': 'Number' }, { 'name': 'blurKernelX', 'type': 'Number' }, { 'name': 'blurKernelY', 'type': 'Number' }], 'args': [{ 'name': 'name', 'type': 'string' }, { 'name': 'size', 'type': 'Union' }, { 'name': 'scene', 'type': 'Scene' }, { 'name': 'generateMipMaps', 'type': 'Boolean' }, { 'name': 'type', 'type': 'Number' }, { 'name': 'samplingMode', 'type': 'Number' }, { 'name': 'generateDepthBuffer', 'type': 'Boolean' }], 'family': 'materials' })
window.customElements.define('ba-mirror-texture', BaMirrorTexture)
