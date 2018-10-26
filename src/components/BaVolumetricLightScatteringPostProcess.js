// this file was auto-generated

import BABYLON from 'babylonjs'
import Component from '../Component'

// Inspired by http://http.developer.nvidia.com/GPUGems3/gpugems3_ch13.html
export class BaVolumetricLightScatteringPostProcess extends Component {
  family = 'lights'
  acceptedProps = ['name', 'ratio', 'camera', 'mesh', 'samples', 'samplingMode', 'reusable']

  render () {
    const { scene, engine } = this.context
    const { name, ratio, camera, mesh, samples, samplingMode, reusable } = this.props
    const baRcamera = scene.getNodeByName(camera)
    const baRmesh = scene.getNodeByName(mesh)
    this.ba = new BABYLON.VolumetricLightScatteringPostProcess(name, ratio, baRcamera, baRmesh, samples, samplingMode, engine, reusable, scene)

    if (process.env.NODE_ENV === 'development') {
      console.log('BaVolumetricLightScatteringPostProcess', { props: this.props, context: this.context })
    }
  }
}

window.customElements.define('ba-volumetric-light-scattering-post-process', BaVolumetricLightScatteringPostProcess)
