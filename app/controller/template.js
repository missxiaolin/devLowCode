'use strict';

const Controller = require('egg').Controller;

class TemplateController extends Controller {
    async query() {
        const {
            id,
            gitUrl,
        } = this.ctx.params;
        const where = {};
        if (id) where.id = id;
        if (gitUrl) where.gitUrl = gitUrl;
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