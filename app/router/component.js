'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
    const { router, controller } = app;
    // 查询
    router.get('/component/query', controller.component.index.index);
};
