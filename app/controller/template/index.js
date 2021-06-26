'use strict';

const Controller = require('egg').Controller;

/**
 * 模板
 */
class TemplateController extends Controller {
    /**
     * 查询
     */
    async query() {
        const {
            id,
            gitUrl,
        } = this.ctx.params;
        const where = {};
        if (id) where.id = id;
        if (gitUrl) where.gitUrl = gitUrl;
        console.log(this.ctx.model.Template)
        const result = await this.ctx.model.Template.findAll({
            where
        });
        this.ctx.body = {
            success: true,
            result
        }
    }

    async list() {

    }

    async updateTemplate() {

    }

}

module.exports = TemplateController;