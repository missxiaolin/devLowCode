'use strict';

const Controller = require('egg').Controller;

function toInt(str) {
    if (typeof str === 'number') return str;
    if (!str) return str;
    return parseInt(str, 10) || 0;
}

/**
 * 模板
 */
class TemplateController extends Controller {
    /**
     * 查询
     */
    async query() {
        const ctx = this.ctx;
        const query = { limit: toInt(ctx.query.limit), offset: toInt(ctx.query.offset) };
        ctx.body = await ctx.model.Template.findAll(query);

        // const {
        //     id,
        //     gitUrl,
        // } = this.ctx.params;
        // const where = {};
        // if (id) where.id = id;
        // if (gitUrl) where.gitUrl = gitUrl;
        // const result = await this.ctx.model.Template.findAll();
        // this.ctx.body = {
        //     success: true,
        //     result: await ctx.model.Template.findAll()
        // }
    }

    /**
     * 更新
     */
    async updateTemplate() {
        const { params } = this.ctx;
        const { name, gitUrl } = params;
        const { model } = this.ctx;
        if (gitUrl && name) {
            try {
                const result = await model.Template.findOne({
                    where: {
                        gitUrl
                    }
                })
                if (result) {
                    await model.Template.update(params, {
                        where: {
                            gitUrl
                        }
                    })
                    const result = await model.Template.findOne({
                        where: {
                            gitUrl
                        }
                    })
                    this.ctx.body = {
                        success: true,
                        result
                    };
                } else {
                    const result = await model.Template.create({
                        ...params,
                        type: 0,
                    });
                    this.ctx.body = {
                        success: true,
                        result
                    };
                }
            } catch (e) {
                this.ctx.body = {
                    showType: 0,
                    result: e
                };
            }
        } else {
            this.ctx.body = 500;
            this.ctx.body = {
                showType: 0,
                result: 'gitUrl || name 必填'
            };
        }
    }

}

module.exports = TemplateController;