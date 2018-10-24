import { Component, Prop } from '@stencil/core'
import BABYLON from 'babylonjs'

import Tunnel from './engine-tunnel'

@Component({ tag: 'ba-engine', shadow: true })
export class BaEngine {
  private engine?: BABYLON.Engine
  @Prop() canvas: HTMLCanvasElement

  componentDidLoad() {
    this.engine = new BABYLON.Engine(this.canvas)
  }

  render() {
    const out = [<canvas ref={el => this.canvas = this.canvas || el}></canvas>]
    if (this.engine){
      out.push(
        <Tunnel.Provider state={{engine: this.engine}}>
          <slot />
        </Tunnel.Provider>
      )
    }
    return out
  }
}
