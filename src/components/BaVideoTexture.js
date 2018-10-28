// this file was auto-generated

import { makeComponentClass } from '../Component'
export const BaVideoTexture = makeComponentClass({ 'name': 'VideoTexture', 'props': [{ 'name': 'autoUpdateTexture', 'type': 'Boolean' }, { 'name': 'video', 'type': 'HTMLVideoElement' }, { 'name': 'onUserActionRequestedObservable', 'type': 'Observable' }, { 'name': 'reset' }], 'args': [{ 'name': 'name', 'type': 'string' }, { 'name': 'src', 'type': 'Union' }, { 'name': 'scene', 'type': 'Scene' }, { 'name': 'generateMipMaps', 'type': 'Boolean' }, { 'name': 'invertY', 'type': 'Boolean' }, { 'name': 'samplingMode', 'type': 'Number' }, { 'name': 'settings', 'type': 'VideoTextureSettings' }], 'family': 'materials' })
window.customElements.define('ba-video-texture', BaVideoTexture)
