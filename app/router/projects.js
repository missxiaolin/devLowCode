'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
    const { router, controller } = app;
    // 查询用户
    router.get('/project/query', controller.project.index.query);
    router.post('/project/createProject', controller.project.index.createProject);
};
