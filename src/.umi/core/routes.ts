import { ApplyPluginsType, dynamic } from '/mnt/d/Project/auncel-project/auncel-admin/node_modules/@umijs/runtime';
import { plugin } from './plugin';

const routes = [
  {
    "path": "/",
    "component": dynamic({ loader: () => import(/* webpackChunkName: 'layouts__BlankLayout' */'/mnt/d/Project/auncel-project/auncel-admin/src/layouts/BlankLayout'), loading: require('@/components/PageLoading/index').default}),
    "routes": [
      {
        "path": "/user",
        "component": dynamic({ loader: () => import(/* webpackChunkName: 'layouts__UserLayout' */'/mnt/d/Project/auncel-project/auncel-admin/src/layouts/UserLayout'), loading: require('@/components/PageLoading/index').default}),
        "routes": [
          {
            "path": "/user",
            "redirect": "/user/login",
            "exact": true
          },
          {
            "name": "login",
            "icon": "smile",
            "path": "/user/login",
            "component": dynamic({ loader: () => import(/* webpackChunkName: 'p__user__login' */'/mnt/d/Project/auncel-project/auncel-admin/src/pages/user/login'), loading: require('@/components/PageLoading/index').default}),
            "exact": true
          },
          {
            "name": "register-result",
            "icon": "smile",
            "path": "/user/register-result",
            "component": dynamic({ loader: () => import(/* webpackChunkName: 'p__user__register-result' */'/mnt/d/Project/auncel-project/auncel-admin/src/pages/user/register-result'), loading: require('@/components/PageLoading/index').default}),
            "exact": true
          },
          {
            "name": "register",
            "icon": "smile",
            "path": "/user/register",
            "component": dynamic({ loader: () => import(/* webpackChunkName: 'p__user__register' */'/mnt/d/Project/auncel-project/auncel-admin/src/pages/user/register'), loading: require('@/components/PageLoading/index').default}),
            "exact": true
          },
          {
            "component": dynamic({ loader: () => import(/* webpackChunkName: 'p__404' */'/mnt/d/Project/auncel-project/auncel-admin/src/pages/404'), loading: require('@/components/PageLoading/index').default}),
            "exact": true
          }
        ]
      },
      {
        "path": "/",
        "component": dynamic({ loader: () => import(/* webpackChunkName: 'layouts__BasicLayout' */'/mnt/d/Project/auncel-project/auncel-admin/src/layouts/BasicLayout'), loading: require('@/components/PageLoading/index').default}),
        "Routes": [
          "src/pages/Authorized"
        ],
        "authority": [
          "admin",
          "user"
        ],
        "routes": [
          {
            "path": "/dashboard",
            "name": "dashboard",
            "icon": "dashboard",
            "routes": [
              {
                "name": "analysis",
                "icon": "smile",
                "path": "/dashboard/analysis",
                "component": dynamic({ loader: () => import(/* webpackChunkName: 'p__dashboard__analysis' */'/mnt/d/Project/auncel-project/auncel-admin/src/pages/dashboard/analysis'), loading: require('@/components/PageLoading/index').default}),
                "exact": true
              },
              {
                "name": "monitor",
                "icon": "smile",
                "path": "/dashboard/monitor",
                "component": dynamic({ loader: () => import(/* webpackChunkName: 'p__dashboard__monitor' */'/mnt/d/Project/auncel-project/auncel-admin/src/pages/dashboard/monitor'), loading: require('@/components/PageLoading/index').default}),
                "exact": true
              },
              {
                "name": "workplace",
                "icon": "smile",
                "path": "/dashboard/workplace",
                "component": dynamic({ loader: () => import(/* webpackChunkName: 'p__dashboard__workplace' */'/mnt/d/Project/auncel-project/auncel-admin/src/pages/dashboard/workplace'), loading: require('@/components/PageLoading/index').default}),
                "exact": true
              }
            ]
          },
          {
            "path": "/form",
            "icon": "form",
            "name": "form",
            "routes": [
              {
                "name": "basic-form",
                "icon": "smile",
                "path": "/form/basic-form",
                "component": dynamic({ loader: () => import(/* webpackChunkName: 'p__form__basic-form' */'/mnt/d/Project/auncel-project/auncel-admin/src/pages/form/basic-form'), loading: require('@/components/PageLoading/index').default}),
                "exact": true
              },
              {
                "name": "step-form",
                "icon": "smile",
                "path": "/form/step-form",
                "component": dynamic({ loader: () => import(/* webpackChunkName: 'p__form__step-form' */'/mnt/d/Project/auncel-project/auncel-admin/src/pages/form/step-form'), loading: require('@/components/PageLoading/index').default}),
                "exact": true
              },
              {
                "name": "advanced-form",
                "icon": "smile",
                "path": "/form/advanced-form",
                "component": dynamic({ loader: () => import(/* webpackChunkName: 'p__form__advanced-form' */'/mnt/d/Project/auncel-project/auncel-admin/src/pages/form/advanced-form'), loading: require('@/components/PageLoading/index').default}),
                "exact": true
              }
            ]
          },
          {
            "path": "/list",
            "icon": "table",
            "name": "list",
            "routes": [
              {
                "path": "/list/search",
                "name": "search-list",
                "component": dynamic({ loader: () => import(/* webpackChunkName: 'p__list__search' */'/mnt/d/Project/auncel-project/auncel-admin/src/pages/list/search'), loading: require('@/components/PageLoading/index').default}),
                "routes": [
                  {
                    "path": "/list/search",
                    "redirect": "/list/search/articles",
                    "exact": true
                  },
                  {
                    "name": "articles",
                    "icon": "smile",
                    "path": "/list/search/articles",
                    "component": dynamic({ loader: () => import(/* webpackChunkName: 'p__list__search__articles' */'/mnt/d/Project/auncel-project/auncel-admin/src/pages/list/search/articles'), loading: require('@/components/PageLoading/index').default}),
                    "exact": true
                  },
                  {
                    "name": "projects",
                    "icon": "smile",
                    "path": "/list/search/projects",
                    "component": dynamic({ loader: () => import(/* webpackChunkName: 'p__list__search__projects' */'/mnt/d/Project/auncel-project/auncel-admin/src/pages/list/search/projects'), loading: require('@/components/PageLoading/index').default}),
                    "exact": true
                  },
                  {
                    "name": "applications",
                    "icon": "smile",
                    "path": "/list/search/applications",
                    "component": dynamic({ loader: () => import(/* webpackChunkName: 'p__list__search__applications' */'/mnt/d/Project/auncel-project/auncel-admin/src/pages/list/search/applications'), loading: require('@/components/PageLoading/index').default}),
                    "exact": true
                  }
                ]
              },
              {
                "name": "table-list",
                "icon": "smile",
                "path": "/list/table-list",
                "component": dynamic({ loader: () => import(/* webpackChunkName: 'p__list__table-list' */'/mnt/d/Project/auncel-project/auncel-admin/src/pages/list/table-list'), loading: require('@/components/PageLoading/index').default}),
                "exact": true
              },
              {
                "name": "basic-list",
                "icon": "smile",
                "path": "/list/basic-list",
                "component": dynamic({ loader: () => import(/* webpackChunkName: 'p__list__basic-list' */'/mnt/d/Project/auncel-project/auncel-admin/src/pages/list/basic-list'), loading: require('@/components/PageLoading/index').default}),
                "exact": true
              },
              {
                "name": "card-list",
                "icon": "smile",
                "path": "/list/card-list",
                "component": dynamic({ loader: () => import(/* webpackChunkName: 'p__list__card-list' */'/mnt/d/Project/auncel-project/auncel-admin/src/pages/list/card-list'), loading: require('@/components/PageLoading/index').default}),
                "exact": true
              }
            ]
          },
          {
            "path": "/profile",
            "name": "profile",
            "icon": "profile",
            "routes": [
              {
                "name": "basic",
                "icon": "smile",
                "path": "/profile/basic",
                "component": dynamic({ loader: () => import(/* webpackChunkName: 'p__profile__basic' */'/mnt/d/Project/auncel-project/auncel-admin/src/pages/profile/basic'), loading: require('@/components/PageLoading/index').default}),
                "exact": true
              },
              {
                "name": "advanced",
                "icon": "smile",
                "path": "/profile/advanced",
                "component": dynamic({ loader: () => import(/* webpackChunkName: 'p__profile__advanced' */'/mnt/d/Project/auncel-project/auncel-admin/src/pages/profile/advanced'), loading: require('@/components/PageLoading/index').default}),
                "exact": true
              }
            ]
          },
          {
            "name": "result",
            "icon": "CheckCircleOutlined",
            "path": "/result",
            "routes": [
              {
                "name": "success",
                "icon": "smile",
                "path": "/result/success",
                "component": dynamic({ loader: () => import(/* webpackChunkName: 'p__result__success' */'/mnt/d/Project/auncel-project/auncel-admin/src/pages/result/success'), loading: require('@/components/PageLoading/index').default}),
                "exact": true
              },
              {
                "name": "fail",
                "icon": "smile",
                "path": "/result/fail",
                "component": dynamic({ loader: () => import(/* webpackChunkName: 'p__result__fail' */'/mnt/d/Project/auncel-project/auncel-admin/src/pages/result/fail'), loading: require('@/components/PageLoading/index').default}),
                "exact": true
              }
            ]
          },
          {
            "name": "exception",
            "icon": "warning",
            "path": "/exception",
            "routes": [
              {
                "name": "403",
                "icon": "smile",
                "path": "/exception/403",
                "component": dynamic({ loader: () => import(/* webpackChunkName: 'p__exception__403' */'/mnt/d/Project/auncel-project/auncel-admin/src/pages/exception/403'), loading: require('@/components/PageLoading/index').default}),
                "exact": true
              },
              {
                "name": "404",
                "icon": "smile",
                "path": "/exception/404",
                "component": dynamic({ loader: () => import(/* webpackChunkName: 'p__exception__404' */'/mnt/d/Project/auncel-project/auncel-admin/src/pages/exception/404'), loading: require('@/components/PageLoading/index').default}),
                "exact": true
              },
              {
                "name": "500",
                "icon": "smile",
                "path": "/exception/500",
                "component": dynamic({ loader: () => import(/* webpackChunkName: 'p__exception__500' */'/mnt/d/Project/auncel-project/auncel-admin/src/pages/exception/500'), loading: require('@/components/PageLoading/index').default}),
                "exact": true
              }
            ]
          },
          {
            "name": "account",
            "icon": "user",
            "path": "/account",
            "routes": [
              {
                "name": "center",
                "icon": "smile",
                "path": "/account/center",
                "component": dynamic({ loader: () => import(/* webpackChunkName: 'p__account__center' */'/mnt/d/Project/auncel-project/auncel-admin/src/pages/account/center'), loading: require('@/components/PageLoading/index').default}),
                "exact": true
              },
              {
                "name": "settings",
                "icon": "smile",
                "path": "/account/settings",
                "component": dynamic({ loader: () => import(/* webpackChunkName: 'p__account__settings' */'/mnt/d/Project/auncel-project/auncel-admin/src/pages/account/settings'), loading: require('@/components/PageLoading/index').default}),
                "exact": true
              }
            ]
          },
          {
            "name": "editor",
            "icon": "highlight",
            "path": "/editor",
            "routes": [
              {
                "name": "flow",
                "icon": "smile",
                "path": "/editor/flow",
                "component": dynamic({ loader: () => import(/* webpackChunkName: 'p__editor__flow' */'/mnt/d/Project/auncel-project/auncel-admin/src/pages/editor/flow'), loading: require('@/components/PageLoading/index').default}),
                "exact": true
              },
              {
                "name": "mind",
                "icon": "smile",
                "path": "/editor/mind",
                "component": dynamic({ loader: () => import(/* webpackChunkName: 'p__editor__mind' */'/mnt/d/Project/auncel-project/auncel-admin/src/pages/editor/mind'), loading: require('@/components/PageLoading/index').default}),
                "exact": true
              },
              {
                "name": "koni",
                "icon": "smile",
                "path": "/editor/koni",
                "component": dynamic({ loader: () => import(/* webpackChunkName: 'p__editor__koni' */'/mnt/d/Project/auncel-project/auncel-admin/src/pages/editor/koni'), loading: require('@/components/PageLoading/index').default}),
                "exact": true
              }
            ]
          },
          {
            "path": "/",
            "redirect": "/dashboard/analysis",
            "authority": [
              "admin",
              "user"
            ],
            "exact": true
          },
          {
            "component": dynamic({ loader: () => import(/* webpackChunkName: 'p__404' */'/mnt/d/Project/auncel-project/auncel-admin/src/pages/404'), loading: require('@/components/PageLoading/index').default}),
            "exact": true
          }
        ]
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
