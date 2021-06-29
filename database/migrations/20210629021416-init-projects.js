'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const { INTEGER, DATE, STRING } = Sequelize;
    await queryInterface.createTable('projects', {
      id: { type: INTEGER, primaryKey: true, autoIncrement: true },
      template_id: INTEGER,
      name: STRING(100),
      page_config: STRING(1000),
      git_config: STRING(1000),
      release_info: STRING(1000),
      version: STRING(100),
      desc: STRING(1000),
      created_at: DATE,
      updated_at: DATE,
      deleted_at: DATE
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('projects');
  }
};

