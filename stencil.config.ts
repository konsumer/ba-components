import { Config } from '@stencil/core';

export const config: Config = {
  namespace: 'ba-components',
  outputTargets:[
    {
      type: 'dist'
    },
    {
      type: 'www',
      serviceWorker: null
    }
  ]
};
