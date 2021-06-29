const Controller = require('egg').Controller;

class FormworkController extends Controller {
    /**
     * 查询
     */
    async index() {
        const {
            id,
            gitUrl,
        } = this.ctx.params;
        const where = {};
        if (id) where.id = id;
        if (gitUrl) where.gitUrl = gitUrl;
        const result = await this.ctx.model.Formwork.findAll({
            where
        });
        this.ctx.body = {
            success: true,
            result
        }
    }

    /**
     * 修改
     */
    async updateFormwork() {
        const { params } = this.ctx;
        const { name, gitUrl } = params;
        const { model } = this.ctx;
        if (gitUrl && name) {
            try {
                const result = await model.Formwork.findOne({
                    where: {
                        gitUrl
                    }
                })
                if (result) {
                    await model.Formwork.update(params, {
                        where: {
                            gitUrl
                        }
                    })
                    const result = await model.Formwork.findOne({
                        where: {
                            gitUrl
                        }
                    })
                    this.ctx.body = {
                        success: true,
                        result
                    };
                } else {
                    const result = await model.Formwork.create({
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

module.exports = FormworkController;