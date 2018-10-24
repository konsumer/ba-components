import { createProviderConsumer } from '@stencil/state-tunnel'
import { Engine } from 'babylonjs'

export interface State {
  engine?: Engine
}

export default createProviderConsumer<State>(
  {},
  (subscribe, child) => (
    <context-consumer subscribe={subscribe} renderer={child} />
  )
)
