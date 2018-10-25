# BabylonJS Code Generation

This will generate all of the components that are supported by this wrapper. You can also use parts of it to generate wrappers for other systems.

* `analyze` - looks at babylonjs and outputs a giant object with all of it's info and puts it in `data/classes.json`.

### these require `analyze`

* `generateComponents` - generates a bunch of web-components and an index for all supported tags.
* `generateReact` - generates a wrapper for (p)react, but you will still need to implement context for `Engine` and `Scene`