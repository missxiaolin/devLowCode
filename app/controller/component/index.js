const Controller = require('egg').Controller;

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
}

module.exports = ComponentController;