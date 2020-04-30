import { Plugin } from '/mnt/d/Project/auncel-project/auncel-admin/node_modules/@umijs/runtime';

const plugin = new Plugin({
  validKeys: ['patchRoutes','rootContainer','render','onRouteChange','dva','getInitialState','locale','locale','request',],
});
plugin.register({
  apply: require('/mnt/d/Project/auncel-project/auncel-admin/node_modules/umi-plugin-antd-icon-config/lib/app.js'),
  path: '/mnt/d/Project/auncel-project/auncel-admin/node_modules/umi-plugin-antd-icon-config/lib/app.js',
});
plugin.register({
  apply: require('/mnt/d/Project/auncel-project/auncel-admin/src/.umi/plugin-dva/runtime.tsx'),
  path: '/mnt/d/Project/auncel-project/auncel-admin/src/.umi/plugin-dva/runtime.tsx',
});
plugin.register({
  apply: require('../plugin-initial-state/runtime'),
  path: '../plugin-initial-state/runtime',
});
plugin.register({
  apply: require('/mnt/d/Project/auncel-project/auncel-admin/src/.umi/plugin-locale/runtime.tsx'),
  path: '/mnt/d/Project/auncel-project/auncel-admin/src/.umi/plugin-locale/runtime.tsx',
});
plugin.register({
  apply: require('../plugin-model/runtime'),
  path: '../plugin-model/runtime',
});

export { plugin };
