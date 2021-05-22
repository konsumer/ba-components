# ba-components

# WIP

This is not complete, just recording some ideas, for now.


This is a full set of [babylonJS](https://www.babylonjs.com/) web-components.

## rational

My hope is to bring you back to the "good old days" of web-dev, where you add some script-tags in your HTML, and can try cool 3D stuff out with no overhead, building, etc.

I worked on the awesome [react-babylonjs](https://github.com/brianzinn/react-babylonjs) and it occured to me that I could write standard [web-components](https://developer.mozilla.org/en-US/docs/Web/Web_Components) that would also work great in react, but allow any modern browser and allow you to use them without any framework or build-system (import them in script-tags, directly.) It would also allow non-react frameworks, like [vue](https://vuejs.org/), [stencil](https://stenciljs.com/) or similar to use them, all in a super-nice declarative style.

## usage

### web-components - à la carte - no build

The first use-case is à la carte web-components, in a regular web-page, with no build system.

Just make a regular HTML file, and open it:

```html
<script src="https://cdn.babylonjs.com/babylon.js"></script>
<script src="https://cdn.babylonjs.com/babylon.max.js"></script>
<script src="https://cdn.babylonjs.com/babylon.worker.js"></script>

<!-- optional, but sets up polyfills for older browsers that don't support web-components -->
<script src="https://unpkg.com/@webcomponents/webcomponentsjs/webcomponents-bundle.js"></script>

<script type="module" src="https://unpkg.com/ba-components/elements/ba-engine.js"></script>
<script type="module" src="https://unpkg.com/ba-components/elements/ba-scene.js"></script>
<script type="module" src="https://unpkg.com/ba-components/elements/ba-follow-camera.js"></script>
<script type="module" src="https://unpkg.com/ba-components/elements/ba-hemispheric-light.js"></script>
<script type="module" src="https://unpkg.com/ba-components/elements/ba-sphere.js"></script>
<script type="module" src="https://unpkg.com/ba-components/elements/ba-standard-material.js"></script>

<ba-engine>
  <ba-scene clearColor="black">
    <ba-follow-camera
      lockedTarget="player"
      heightOffset="4"
      cameraAcceleration="0.05"
      maxCameraSpeed="100"
    />
    <ba-hemispheric-light direction="up"></ba-hemispheric-light>
    <ba-sphere name="player" radius="200">
      <ba-standard-material diffuseColor="tomato"></ba-standard-material>
    </ba-sphere>
  </ba-scene>
</ba-engine>
```

Since this lib is published on unpkg, all in seperate files, you don't need to install or run anything to make it work, and it only downloads what you need!


### web-components - complete - no build

For a lot of projects you will use more of these components, and it stars to make sense that they are all bundled, but you still don't want to use a build-system, personally. We got you covered!

```html
<script src="https://cdn.babylonjs.com/babylon.js"></script>
<script src="https://cdn.babylonjs.com/babylon.max.js"></script>
<script src="https://cdn.babylonjs.com/babylon.worker.js"></script>

<!-- optional, but sets up polyfills for older browsers that don't support web-components -->
<script src="https://unpkg.com/@webcomponents/webcomponentsjs/webcomponents-bundle.js"></script>

<!-- all components in one! -->
<script src="https://unpkg.com/ba-components/elements-bundle.js"></script>

<ba-engine>
  <ba-scene clearColor="black">
    <ba-follow-camera
      lockedTarget="player"
      heightOffset="4"
      cameraAcceleration="0.05"
      maxCameraSpeed="100"
    />
    <ba-hemispheric-light direction="up"></ba-hemispheric-light>
    <ba-sphere name="player" radius="200">
      <ba-standard-material diffuseColor="tomato"></ba-standard-material>
    </ba-sphere>
  </ba-scene>
</ba-engine>
```

### web-components - custom 

In your own project, you can insert your own custom components that have access to `engine` and `scene`. It's a little more complicated, but once you make them, they are totally reusable, and you can mix them in with all your stuff:

```html
<script src="https://cdn.babylonjs.com/babylon.js"></script>
<script src="https://cdn.babylonjs.com/babylon.max.js"></script>
<script src="https://cdn.babylonjs.com/babylon.worker.js"></script>

<!-- optional, but sets up polyfills for older browsers that don't support web-components -->
<script src="https://unpkg.com/@webcomponents/webcomponentsjs/webcomponents-bundle.js"></script>

<!-- all components in one! -->
<script src="https://unpkg.com/ba-components/elements-bundle.js"></script>

<script>
class MyDuck extends BaComponent {
  acceptedProps = [
    'position',
    'x',
    'y',
    'z',
    'name'
  ]

  render () {
    const { name, x = 0, y = 0, z = 0, position, ...options } = this.props
    const { scene } = this.context
    const pos = position || new BABYLON.Vector3(x, y, z)
    // my duck is just a sphere...
    this.mesh = BABYLON.MeshBuilder.CreateSphere(name, options, scene)
    this.mesh.position = pos
  }
}

// custom-tags need a dash in name!
window.customElements.define('my-duck', MyDuck)

</script>

<ba-engine>
  <ba-scene clearColor="black">
    <ba-follow-camera
      lockedTarget="duck"
      heightOffset="4"
      cameraAcceleration="0.05"
      maxCameraSpeed="100"
    />
    <ba-hemispheric-light direction="up"></ba-hemispheric-light>
    <my-duck name="duck" x="0" y="0.5" z="0" />
  </ba-scene>
</ba-engine>
```


## react

Maybe you want to use it in react. I highly recommend [react-babylonjs](https://github.com/brianzinn/react-babylonjs), as it's a much more complete wrapper, and has some truly killer features, better docs/demos, and a more ergonomic react-shape, but this demonstrates it's possible to use it however you like. You probably want to use upper-first camel-case (like normal react stuff) for your tags. You can actually mix these (if you import the react version, it also defines the web-component.)

In my docs, I'm going to use all web-components, because that is the primary focus of this project, but this should give you an idea of how to translate:

First install it in your react-project:

```sh
npm i ba-components
```

Now use it:

```js
import { BaEngine } from 'ba-components/react/BaEngine'
import { BaScene } from 'ba-components/react/BaScene'
import { BaFollowCamera } from 'ba-components/react/BaFollowCamera'
import { BaHemisphericLight } from 'ba-components/react/BaHemisphericLight'
import { BaSphere } from 'ba-components/react/BaSphere'
import { BaStandardMaterial } from 'ba-components/react/BaStandardMaterial'

const MyGame = () => (
  <BaEngine>
    <BaScene clearColor="black">
      <BaFollowCamera lockedTarget="duck" heightOffset="4" cameraAcceleration="0.05" maxCameraSpeed="100">
        <BaHemisphericLight direction="up" />
        <BaSphere name="player" radius="200">
          <BaStandardMaterial diffuseColor="tomato" />
        </BaSphere>
      </BaFollowCamera>
    </BaScene>
  </BaEngine>
)

export default MyGame

```

You can also import it all, just like with web-components:

```js
import {
  BaEngine,
  BaScene,
  BaFollowCamera,
  BaHemisphericLight,
  BaSphere,
  BaStandardMaterial
} from 'ba-components/react-bundle'
```