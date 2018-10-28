// this file was auto-generated

import { makeComponentClass } from '../Component'
export const BaSprite = makeComponentClass({ 'name': 'Sprite', 'props': [{ 'name': 'name', 'type': 'string' }, { 'name': 'position', 'type': 'Vector3' }, { 'name': 'color', 'type': 'Color4' }, { 'name': 'width', 'type': 'Number' }, { 'name': 'height', 'type': 'Number' }, { 'name': 'angle', 'type': 'Number' }, { 'name': 'cellIndex', 'type': 'Number' }, { 'name': 'invertU', 'type': 'Number' }, { 'name': 'invertV', 'type': 'Number' }, { 'name': 'disposeWhenFinishedAnimating', 'type': 'Boolean' }, { 'name': 'animations', 'type': ['Animation'] }, { 'name': 'isPickable', 'type': 'Boolean' }, { 'name': 'actionManager', 'type': 'Nullable' }, { 'name': 'isVisible', 'type': 'Boolean' }, { 'name': 'size', 'type': 'Number' }], 'args': [{ 'name': 'name', 'type': 'string' }, { 'name': 'manager', 'type': 'ISpriteManager' }], 'family': 'materials' })
window.customElements.define('ba-sprite', BaSprite)
