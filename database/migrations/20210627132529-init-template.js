'use strict';

module.exports = {
  // 在执行数据库升级时调用的函数，创建 template 表
  up: async (queryInterface, Sequelize) => {
    const { INTEGER, DATE, STRING } = Sequelize;
    await queryInterface.createTable('template', {
      id: { type: INTEGER, primaryKey: true, autoIncrement: true },
      templateName: STRING(100),
      author: STRING(100),
      name: STRING(100),
      snapshot: STRING(200),
      gitUrl: STRING(200),
      type: INTEGER,
      version: STRING(100),
      created_at: DATE,
      updated_at: DATE,
    });
  },
  // 在执行数据库降级时调用的函数，删除 template 表
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('template');
  }
};
