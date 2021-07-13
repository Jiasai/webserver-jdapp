/**
 * @description 错误返回的数据模型
 * @author Masion
 */

class ErrorModel{
    constructor(errno = -1,message = 'No err'){
        this.errno = errno;
        this.message = message;
    }
}

module.exports = ErrorModel

// new ErrorModel(1001,'注册失败')
// {errno:1001,message:'注册失败'}

