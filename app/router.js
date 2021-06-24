'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  router.get('/', controller.home.index);

  // 查询用户列表
  router.get('/user/list', controller.user.list);

  // 模板列表
  router.post('/template/update', controller.template.index.updateTemplate);
  router.get('/template/detail', controller.template.index.query);
  router.get('/template/list', controller.template.index.query);
};
