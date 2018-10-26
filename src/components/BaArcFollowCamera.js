// this file was auto-generated

import BABYLON from 'babylonjs'
import Component from '../Component'

// Arc Rotate version of the follow camera.
// It still follows a Defined mesh but in an Arc Rotate Camera fashion.
export class BaArcFollowCamera extends Component {
  family = 'cameras'
  acceptedProps = ['name', 'alpha', 'beta', 'radius', 'target']

  render () {
    const { scene } = this.context
    const { name, alpha, beta, radius, target } = this.props
    const baRtarget = scene.getNodeByName(target)
    this.ba = new BABYLON.ArcFollowCamera(name, alpha, beta, radius, baRtarget, scene)
    this.ba.attachControl(this.context.canvas, true)
    if (process.env.NODE_ENV === 'development') {
      console.log('BaArcFollowCamera', { props: this.props, context: this.context })
    }
  }
}

window.customElements.define('ba-arc-follow-camera', BaArcFollowCamera)
