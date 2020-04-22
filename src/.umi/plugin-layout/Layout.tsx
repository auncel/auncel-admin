import React from 'react';
import { ApplyPluginsType } from 'umi';
import { plugin } from '../core/umiExports';

export default (props) => {
  const runtimeConfig = plugin.applyPlugins({
    key: 'layout',
    type: ApplyPluginsType.modify,
    initialValue: {},
  }) || {};
  const userConfig = {
    ...{'name':'Ant Design Pro','theme':'PRO','locale':true,'showBreadcrumb':true},
    ...runtimeConfig
  };
  return React.createElement(require('/mnt/d/Project/auncel-project/auncel-admin/node_modules/@umijs/plugin-layout/lib/layout/index.js').default, {
    userConfig,
    ...props
  })
}
