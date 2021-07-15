const Controller = require('egg').Controller;

const formatWhereCase = (params) => {
    const where = {};
    Object.keys(params).forEach(key => {
        if (params[key]) {
            where[key] = params[key];
        }
    });
    return where;
};

class ComponentController extends Controller {
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
        const result = await this.ctx.model.Component.findAll({
            where
        });
        this.ctx.body = {
            success: true,
            result
        }
    }



    async addComponent() {
        const {
            gitUrl,
            name,
            description,
            config,
            status = 0,
        } = this.ctx.params;
        if (gitUrl && name) {
            try {
                // todo 先查是否存在同名组件
                console.log(this.ctx.model.Component)
                const result = await this.ctx.model.Component.create({
                    gitUrl,
                    config,
                    description,
                    name,
                    status
                })

                this.ctx.body = {
                    success: true,
                    result,
                };
            } catch (e) {
                console.log(e)
                this.ctx.status = 500;
                this.ctx.body = {
                    success: false,
                    result: e
                };
            }
        } else {
            this.ctx.status = 500;
            this.ctx.body = {
                success: false,
                result: {
                    message: 'gitUrl || name 必填'
                }
            };
        }
    }
}

module.exports = ComponentController;