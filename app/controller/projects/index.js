const Controller = require('egg').Controller;

function toInt(str) {
    if (typeof str === 'number') return str;
    if (!str) return str;
    return parseInt(str, 10) || 0;
}

class ProjectsController extends Controller {
    async index() {
        const ctx = this.ctx;
        const query = { limit: toInt(ctx.query.limit), offset: toInt(ctx.query.offset) };
        ctx.body = await ctx.model.Projects.findAll(query);
    }

    async query() {
        const {
            id,
        } = this.ctx.params;
        const where = {};
        if (id) where.id = id;
        const result = await this.ctx.model.Project.findAll({
            where,
            order: [
                // 将转义 title 并针对有效方向列表进行降序排列
                ['updatedAt', 'DESC'],
            ]
        })
        result.forEach(project => {
            project.pageConfig = JSON.parse(project.pageConfig)
            project.gitConfig = JSON.parse(project.gitConfig)
            project.releaseInfo = JSON.parse(project.releaseInfo)
        })
        this.ctx.body = {
            success: true,
            result
        }
    }
}

module.exports = ProjectsController;