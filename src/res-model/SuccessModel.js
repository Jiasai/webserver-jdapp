/**
 * @description 成功返回的数据模型
 * @author Masion
 */

class SuccessModel{
    constructor(data){
        this.errno = 0 //成功返回的标志
        if(data != null){
            this.data = data
        }
    }
}

module.exports = SuccessModel;

// new SuccessModel(data)
// {errno:0,data:...}
