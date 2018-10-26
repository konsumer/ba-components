/* global HTMLElement */

/**
 * Base-class for all components
 */
export class Component extends HTMLElement {
  // you should override this. what props are ok?
  acceptedProps = []

  // you can add to this to share it with children
  contextAdditions = {}

  // this will be assembled for you
  props = {}

  // since all components use this, give each child the context of it's parent
  get context () {
    return Object.assign({}, this.parentNode.context, this.contextAdditions)
  }

  connectedCallback () {
    this.acceptedProps.forEach(p => {
      const a = this.getAttribute(p)
      if (a !== null) {
        this.props[p] = a
      }
    })
    this.render()
    if (process.env.NODE_ENV === 'development') {
      console.log(this.constructor.name, { props: this.props, context: this.context })
    }
  }

  // you should override this
  render () {}
}

export default Component
