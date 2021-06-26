/* eslint valid-jsdoc: "off" */

'use strict';

/**
 * @param {Egg.EggAppInfo} appInfo app info
 */
module.exports = appInfo => {
  /**
   * built-in config
   * @type {Egg.EggAppConfig}
   **/
  const config = exports = {};

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1624266666001_9134';

  // add your middleware config here
  config.middleware = [];

  // add your user config here
  const userConfig = {
    // myAppName: 'egg',
  };

  // 关闭csrf开启跨域
  config.security = {
    // 关闭csrf
    csrf: {
      enable: false,
      ignoreJSON: true
    },
    domainWhiteList: '*'
  };

  // 允许跨域的方法
  config.cors = {
    origin: 'http://localhost:8080',
    allowMethods: 'GET, PUT, POST, DELETE, PATCH, OPTIONS'
  };

  return {
    ...config,
    ...userConfig,
  };
};
