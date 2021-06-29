'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
    const { router, controller } = app;
    // 查询
    router.get('/formwork/query', controller.formwork.index.index);
    router.get('/formwork/list', controller.formwork.index.index);
    // 修改
    router.post('/formwork/update', controller.formwork.index.updateFormwork);
};
