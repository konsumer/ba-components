// this doesn't return, but sets window.BABYLON
import 'babylonjs'
import BaComponent from './ba-component.js'

class BaScene extends BaComponent {
  static observedAttributes = [
    'actionManager',
    'actionManagers',
    'activeBonesPerfCounter',
    'activeCamera',
    'activeCameras',
    'activeParticlesPerfCounter',
    'afterCameraRender',
    'afterRender',
    'ambientColor',
    'animatables',
    'animationGroups',
    'animationPropertiesOverride',
    'animationTimeScale',
    'animations',
    'animationsEnabled',
    'audioEnabled',
    'autoClear',
    'autoClearDepthAndStencil',
    'beforeCameraRender',
    'beforeRender',
    'blockMaterialDirtyMechanism',
    'cameraToUseForPointers',
    'cameras',
    'clearColor',
    'clipPlane',
    'clipPlane2',
    'clipPlane3',
    'clipPlane4',
    'collisionsEnabled',
    'constantlyUpdateMeshUnderPointer',
    'customRenderTargets',
    'debugLayer',
    'defaultCursor',
    'defaultMaterial',
    'disableOfflineSupportExceptionRules',
    'dispatchAllSubMeshesOfActiveMeshes',
    'dumpNextRenderTargets',
    'effectLayers',
    'environmentTexture',
    'fogColor',
    'fogDensity',
    'fogEnabled',
    'fogEnd',
    'fogMode',
    'fogStart',
    'forcePointsCloud',
    'forceShowBoundingBoxes',
    'forceWireframe',
    'frustumPlanes',
    'gamepadManager',
    'geometries',
    'geometryBufferRenderer',
    'getActiveMeshCandidates',
    'getActiveSubMeshCandidates',
    'getCollidingSubMeshCandidates',
    'getDeterministicFrameTime',
    'getIntersectingSubMeshCandidates',
    'gravity',
    'headphone',
    'hoverCursor',
    'imageProcessingConfiguration',
    'importedMeshesFiles',
    'isDisposed',
    'isLoading',
    'layers',
    'lensFlareSystems',
    'lensFlaresEnabled',
    'lights',
    'lightsEnabled',
    'loadingPluginName',
    'mainSoundTrack',
    'materials',
    'meshUnderPointer',
    'meshes',
    'metadata',
    'morphTargetManagers',
    'multiMaterials',
    'onAfterActiveMeshesEvaluationObservable',
    'onAfterAnimationsObservable',
    'onAfterCameraRenderObservable',
    'onAfterDrawPhaseObservable',
    'onAfterParticlesRenderingObservable',
    'onAfterPhysicsObservable',
    'onAfterRenderObservable',
    'onAfterRenderTargetsRenderObservable',
    'onAfterRenderingGroupObservable',
    'onAfterSpritesRenderingObservable',
    'onAfterStepObservable',
    'onBeforeActiveMeshesEvaluationObservable',
    'onBeforeAnimationsObservable',
    'onBeforeCameraRenderObservable',
    'onBeforeDrawPhaseObservable',
    'onBeforeParticlesRenderingObservable',
    'onBeforePhysicsObservable',
    'onBeforeRenderObservable',
    'onBeforeRenderTargetsRenderObservable',
    'onBeforeRenderingGroupObservable',
    'onBeforeSpritesRenderingObservable',
    'onBeforeStepObservable',
    'onCameraRemovedObservable',
    'onDataLoadedObservable',
    'onDispose',
    'onDisposeObservable',
    'onGeometryRemovedObservable',
    'onKeyboardObservable',
    'onLightRemovedObservable',
    'onMaterialRemovedObservable',
    'onMeshImportedObservable',
    'onMeshRemovedObservable',
    'onNewCameraAddedObservable',
    'onNewGeometryAddedObservable',
    'onNewLightAddedObservable',
    'onNewMaterialAddedObservable',
    'onNewMeshAddedObservable',
    'onNewTextureAddedObservable',
    'onNewTransformNodeAddedObservable',
    'onPointerDown',
    'onPointerMove',
    'onPointerObservable',
    'onPointerPick',
    'onPointerUp',
    'onPreKeyboardObservable',
    'onPrePointerObservable',
    'onReadyObservable',
    'onTextureRemovedObservable',
    'onTransformNodeRemovedObservable',
    'particleSystems',
    'particlesEnabled',
    'pointerDownPredicate',
    'pointerMovePredicate',
    'pointerUpPredicate',
    'pointerX',
    'pointerY',
    'postProcessManager',
    'postProcessRenderPipelineManager',
    'postProcesses',
    'postProcessesEnabled',
    'preventDefaultOnPointerDown',
    'probesEnabled',
    'proceduralTextures',
    'proceduralTexturesEnabled',
    'reflectionProbes',
    'renderTargetsEnabled',
    'requireLightSorting',
    'rootNodes',
    'selectionOctree',
    'shadowsEnabled',
    'simplificationQueue',
    'skeletons',
    'skeletonsEnabled',
    'soundTracks',
    'sounds',
    'spriteManagers',
    'spritesEnabled',
    'textures',
    'texturesEnabled',
    'totalActiveIndicesPerfCounter',
    'totalVerticesPerfCounter',
    'transformNodes',
    'uid',
    'unTranslatedPointer',
    'useConstantAnimationDeltaTime',
    'useDelayedTextureLoading',
    'useRightHandedSystem',
    'workerCollisions'
  ]

  // TODO: add attributeChangedCallback that updates things

  constructor(){
    super()
    this.importantObject = new BABYLON.Scene(this.context.engine)
    this.setInitialProps()
    this.contextAdditions.scene = this.importantObject
  }
}
window.customElements.define('ba-scene', BaScene)