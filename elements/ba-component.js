import { convertColor } from './utils.js'

export default class BaComponent extends HTMLElement {
  props = {}

  // you can add to this to share it with children
  contextAdditions = {}

  static observedAttributes = []

  attributeChangedCallback(name, oldValue, newValue) {
    if (name.toLowerCase().indexOf('color') !== -1) {
      this.props[name] = convertColor(newValue)
    } else {
      this.props[name] = newValue
    }
    
    if (this.importantObject) {
      this.importantObject[name] = this.props[name]
    }
  }

  // since all components use this, give each child the context of it's parent
  get context () {
    return Object.assign({}, this.parentNode ? this.parentNode.context : {}, this.contextAdditions)
  }

  setInitialProps(){
    for (const attr of this.attributes) {
      this.attributeChangedCallback(attr.name, attr.value)
    }
  }
}