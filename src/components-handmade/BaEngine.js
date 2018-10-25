import BABYLON from 'babylonjs'

import Component from '../Component'

// this sets up the canvas and engine
export default class BaEngine extends Component {
  acceptedProps = [
    'adaptToDeviceRatio',
    'alpha',
    'antialias',
    'audioEngine',
    'autoEnableWebVR',
    'depth',
    'deterministicLockstep',
    'disableWebGL2Support',
    'doNotHandleContextLost',
    'failIfMajorPerformanceCaveat',
    'limitDeviceRatio',
    'lockstepMaxSteps',
    'premultipliedAlpha',
    'preserveDrawingBuffer',
    'stencil'
  ]

  render () {
    const cnv = document.createElement('canvas')
    this.contextAdditions.canvas = cnv
    cnv.setAttribute('style', 'height: 100%; width: 100%')
    this.createShadowRoot()
    this.shadowRoot.appendChild(cnv)
    const { adaptToDeviceRatio, antialias, ...options } = this.props
    const engine = new BABYLON.Engine(cnv, antialias, options, adaptToDeviceRatio)
    this.contextAdditions.engine = engine
    engine.runRenderLoop(() => {
      (engine.scenes || []).forEach(scene => {
        scene.render()
      })
    })
  }
}
