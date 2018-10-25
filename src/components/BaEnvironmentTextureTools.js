// this file was auto-generated

import BABYLON from 'babylonjs'
import Component from '../Component'

// Sets of helpers addressing the serialization and deserialization of environment texture
// stored in a BabylonJS env file.
// Those files are usually stored as .env files.
export class BaEnvironmentTextureTools extends Component {
  family = 'materials'
  acceptedProps = []

  render () {
    this.ba = new BABYLON.EnvironmentTextureTools()
  }
}

window.customElements.define('ba-environment-texture-tools', BaEnvironmentTextureTools)
