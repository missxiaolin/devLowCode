'use strict';

const formatWhereCase = (params) => {
    const where = {};
    Object.keys(params).forEach(key => {
        if (params[key]) {
            where[key] = params[key];
        }
    });
    return where;
};

