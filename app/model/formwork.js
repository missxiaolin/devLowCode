'use strict';

module.exports = app => {
    const { STRING, INTEGER, DATE } = app.Sequelize;

    const Formwork = app.model.define('formwork', {
        id: { type: INTEGER, primaryKey: true, autoIncrement: true },
        t_name: STRING(100),
        author: STRING(100),
        name: STRING(100),
        snapshot: STRING(200),
        git_url: STRING(200),
        type: INTEGER,
        version: STRING(100),
        created_at: DATE,
        updated_at: DATE,
        deleted_at: DATE
    });

    return Formwork;
};