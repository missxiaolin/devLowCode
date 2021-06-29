'use strict';

module.exports = app => {
    const { STRING, INTEGER, DATE } = app.Sequelize;

    const Projects = app.model.define('projects', {
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

    return Projects;
};