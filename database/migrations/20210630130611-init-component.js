'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const { INTEGER, STRING, TEXT } = Sequelize;
    await queryInterface.createTable('component', {
      id: { type: INTEGER, primaryKey: true, autoIncrement: true },
      description: STRING(100),
      name: STRING(100),
      author: STRING(100),
      gitUrl: STRING(200),
      config: TEXT,
      status: INTEGER
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('component');
  }
};
