//因为nodejs只能运行一个js文件所以需要其他文件内的函数方法 
//需要导出，在入口文件进行导入
console.log("until模块执行了")
// let count = 1
// module.exports.getNumber = function(){
// 	count++
//   return count
// }
// module.exports.abc = 123;

console.log(module.exports === exports)
module.exports = {
    count:1,
    getNumber(){
        return this.count
    },
    abc:123
}
module.exports.bcd =456
console.log(module.exports === exports)