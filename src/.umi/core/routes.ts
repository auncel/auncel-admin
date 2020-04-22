import { ApplyPluginsType, dynamic } from '/mnt/d/Project/auncel-project/auncel-admin/node_modules/@umijs/runtime';
import { plugin } from './plugin';

const routes = [
  {
    "path": "/",
    "component": dynamic({ loader: () => import(/* webpackChunkName: '.umi__plugin-layout__Layout' */'/mnt/d/Project/auncel-project/auncel-admin/src/.umi/plugin-layout/Layout.tsx'), loading: require('@/components/PageLoading/index').default}),
    "routes": [
      {
        "path": "/user",
        "layout": false,
        "routes": [
          {
            "name": "login",
            "path": "/user/login",
            "layout": false,
            "component": dynamic({ loader: () => import(/* webpackChunkName: 'p__user__login' */'/mnt/d/Project/auncel-project/auncel-admin/src/pages/user/login'), loading: require('@/components/PageLoading/index').default}),
            "exact": true
          }
        ]
      },
      {
        "path": "/welcome",
        "name": "welcome",
        "icon": "smile",
        "component": dynamic({ loader: () => import(/* webpackChunkName: 'p__Welcome' */'/mnt/d/Project/auncel-project/auncel-admin/src/pages/Welcome'), loading: require('@/components/PageLoading/index').default}),
        "exact": true
      },
      {
        "path": "/admin",
        "name": "admin",
        "icon": "crown",
        "access": "canAdmin",
        "component": dynamic({ loader: () => import(/* webpackChunkName: 'p__Admin' */'/mnt/d/Project/auncel-project/auncel-admin/src/pages/Admin'), loading: require('@/components/PageLoading/index').default}),
        "routes": [
          {
            "path": "/admin/sub-page",
            "name": "sub-page",
            "icon": "smile",
            "component": dynamic({ loader: () => import(/* webpackChunkName: 'p__Welcome' */'/mnt/d/Project/auncel-project/auncel-admin/src/pages/Welcome'), loading: require('@/components/PageLoading/index').default}),
            "exact": true
          }
        ]
      },
      {
        "name": "list.table-list",
        "icon": "table",
        "path": "/list",
        "component": dynamic({ loader: () => import(/* webpackChunkName: 'p__ListTableList' */'/mnt/d/Project/auncel-project/auncel-admin/src/pages/ListTableList'), loading: require('@/components/PageLoading/index').default}),
        "exact": true
      },
      {
        "path": "/",
        "redirect": "/welcome",
        "exact": true
      },
      {
        "component": dynamic({ loader: () => import(/* webpackChunkName: 'p__404' */'/mnt/d/Project/auncel-project/auncel-admin/src/pages/404'), loading: require('@/components/PageLoading/index').default}),
        "exact": true
      }
    ]
  }
];

// allow user to extend routes
plugin.applyPlugins({
  key: 'patchRoutes',
  type: ApplyPluginsType.event,
  args: { routes },
});

export { routes };
