# server



## QuickStart

<!-- add docs here for user -->

see [egg docs][egg] for more detail.

### Development

```bash
$ npm i
$ npm run dev
$ open http://localhost:7001/
```

### Deploy

```bash
$ npm start
$ npm stop
```

### npm scripts

- Use `npm run lint` to check code style.
- Use `npm test` to run unit test.
- Use `npm run autod` to auto detect dependencies upgrade, see [autod](https://www.npmjs.com/package/autod) for more detail.


[egg]: https://eggjs.org

### mysql 配置

```js
module.exports = {
  sequelize: {
    dialect: 'mysql',
    host: '127.0.0.1',
    port: 3306,
    database: 'coco',
    username: 'root',
    password: 'root1234',
    logging: false
  }
};
```

### 数据表结构：

#### 1. project

```js
'use strict';

module.exports = app => {
  const { STRING, INTEGER, DATE, TEXT } = app.Sequelize;

  const Page = app.model.define('project', {
    id: { type: INTEGER, primaryKey: true, autoIncrement: true },
    templateId: INTEGER,
    name: STRING(100),
    pageConfig: TEXT,
    gitConfig: TEXT,
    releaseInfo: TEXT,
    version: STRING(100),
    desc: STRING(1000),
  }, {
    paranoid: true
  });

  return Page;
};
```

#### 2. template
```js
'use strict';

module.exports = app => {
  const { STRING, INTEGER, DATE, BIGINT } = app.Sequelize;

  const Template = app.model.define('template', {
    id: { type: INTEGER, primaryKey: true, autoIncrement: true },
    templateName: STRING(100),
    author: STRING(100),
    name: STRING(100),
    snapshot: STRING(200),
    gitUrl: STRING(200),
    type: INTEGER,
    version: STRING(100),
  }, {
    paranoid: true
  });

  return Template;
};
```