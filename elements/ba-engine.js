// this doesn't return, but sets window.BABYLON
import 'babylonjs'
import BaComponent from './ba-component.js'

class BaEngine extends BaComponent {
  static observedAttributes = [
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

  // TODO: add attributeChangedCallback that updates things

  constructor(){
    super()
    const cnv = document.createElement('canvas')
    this.contextAdditions.canvas = cnv
    cnv.setAttribute('style', 'height: 100%; width: 100%')
    this.attachShadow({ mode: 'open' })
    this.shadowRoot.appendChild(cnv)
    const { adaptToDeviceRatio, antialias, ...options } = this.props
    this.importantObject = new BABYLON.Engine(cnv, antialias, options, adaptToDeviceRatio)
    this.setInitialProps()
    this.contextAdditions.engine = this.importantObject
    this.importantObject.runRenderLoop(() => {
      (this.importantObject.scenes || []).forEach(scene => {
        scene.render()
      })
    })
  }
}
window.customElements.define('ba-engine', BaEngine)
