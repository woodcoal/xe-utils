var isArray = require('./isArray')
var arrayEach = require('../array/arrayEach')
var objectEach = require('../object/objectEach')

/**
  * 迭代器
  *
  * @param {Object} obj 对象/数组
  * @param {Function} iterate(item, index, obj) 回调
  * @param {Object} context 上下文
  * @return {Object}
  */
function each (obj, iterate, context) {
  if (obj) {
    context = context || this
    if (isArray(obj)) {
      return arrayEach(obj, iterate, context)
    }
    return objectEach(obj, iterate, context)
  }
  return obj
}

module.exports = each