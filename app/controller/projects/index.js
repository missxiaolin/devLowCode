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

    /**
     * 查询
     */
    async query() {
        const {
            id,
        } = this.ctx.params;
        const where = {};
        if (id) where.id = id;
        const result = await this.ctx.model.Projects.findAll({
            where,
            order: [
                // 将转义 title 并针对有效方向列表进行降序排列
                ['updatedAt', 'DESC'],
            ]
        })
        result.forEach(project => {
            project.pageConfig = JSON.parse(project.page_config)
            project.gitConfig = JSON.parse(project.git_config)
            project.releaseInfo = JSON.parse(project.release_info)
        })
        this.ctx.body = {
            success: true,
            result
        }
    }
}

module.exports = ProjectsController;