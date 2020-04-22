import './core/polyfill';
import '@@/core/devScripts';
import '../global.tsx';
import { plugin } from './core/plugin';
import { createHistory } from './core/history';
import { ApplyPluginsType } from '/mnt/d/Project/auncel-project/auncel-admin/node_modules/@umijs/runtime';
import { renderClient } from '/mnt/d/Project/auncel-project/auncel-admin/node_modules/@umijs/renderer-react/dist/index.js';


require('../global.less');
require('./plugin-locale/locale')._onCreate();

const getClientRender = (args: { hot?: boolean } = {}) => plugin.applyPlugins({
  key: 'render',
  type: ApplyPluginsType.compose,
  initialValue: () => {
    return renderClient({
      // @ts-ignore
      routes: require('./core/routes').routes,
      plugin,
      history: createHistory(args.hot),
      rootElement: 'root',
    });
  },
  args,
});

const clientRender = getClientRender();
export default clientRender();


    window.g_umi = {
      version: '3.1.1',
    };
  

    (() => {
      try {
        const ua = window.navigator.userAgent;
        const isIE = ua.indexOf('MSIE ') > -1 || ua.indexOf('Trident/') > -1;
        if (isIE) return;

        // Umi UI Bubble
        require('/mnt/d/Project/auncel-project/auncel-admin/node_modules/@umijs/preset-ui/lib/bubble').default({
          port: 3000,
          path: '/mnt/d/Project/auncel-project/auncel-admin',
          currentProject: '',
          isBigfish: undefined,
        });
      } catch (e) {
        console.warn('Umi UI render error:', e);
      }
    })();
  

// hot module replacement
// @ts-ignore
if (module.hot) {
  // @ts-ignore
  module.hot.accept('./core/routes', () => {
    getClientRender({ hot: true })();
  });
}
