'use strict';

const Controller = require('egg').Controller

const userList = []

class UserController extends Controller {
    // 查询用户列表
    async list() {
        this.ctx.body = {
            msg: 'ok',
            data: userList
        }
    }
}

module.exports = UserController
