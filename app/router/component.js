'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
    const { router, controller } = app;
    // 查询
    router.post('/component/add', controller.component.index.addComponent);
    router.post('/component/update', controller.component.index.updateComponent);
    router.get('/component/query', controller.component.index.query);
};
