// -------- 第三方库 -------
const fs = require('async-file');
const mz = require('mz-modules');
const shelljs = require('shelljs');
const md5 = require('md5');
const uuidV1 = require('uuid/v1');
const uuidV3 = require('uuid/v3');
const uuidV4 = require('uuid/v4');
const uuidV5 = require('uuid/v5');

// ---------自定义---------
const helper = require('./core/helper');
const isType = require('./core/isType');
const io = require('./core/io');
const crypt = require('./core/crypt');

//
let app = null;

module.exports = {
    setApp: (eggApp) => app = eggApp,
    // 异步(async/await)文件操作
    // 文档: https://github.com/davetemplin/async-file
    fs,

    // 文档: https://github.com/node-modules/mz-modules
    mz,

    // 文档: https://github.com/pvorb/node-md5
    md5,

    // uuid生成算法
    // 文档: https://github.com/kelektiv/node-uuid
    /*
        usage:
             T.uuid.v1(),
             T.uuid.v3("hello world", T.uuid.v3.DNS),
             T.uuid.v4(),
             T.uuid.v5("hello world", T.uuid.v5.DNS)
     */
    uuid: {
        v1: uuidV1,
        v3: uuidV3,
        v4: uuidV4,
        v5: uuidV5,
    },

    // 响应error对象
    respError: (error) => {
        if(app && app.config.env === "local") console.error(error);
        return isType.isError(error) ? error : new Error(error)
    },

    // 常用未分类的工具方法
    helper,

    // 校验数据类型
    isType,

    // 文件io操作
    io,

    // 加密库
    crypt,

    // shell 操作
     shelljs,
};
