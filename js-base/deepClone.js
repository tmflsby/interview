/**
 * 深拷贝
 * @param target 要拷贝的对象
 * */
const deepClone = (target) => {
  // 检测数据类型
  if (typeof target === 'object' && target !== null) {
    // 创建一个容器
    const result = Array.isArray(target) ? [] : {}
    // 遍历对象
    for (let key in target) {
      // 检测该属性是否为对象本身的属性(不能拷贝原型对象的属性)
      if (target.hasOwnProperty(key)) {
        // copy 递归调用
        result[key] = deepClone(target[key])
      }
    }
    return result
  } else {
    return target
  }
}


/** test */
const obj1 = {
  age: 20,
  name: 'xxx',
  address: {
    city: 'beijing'
  },
  arr: ['a', 'b', 'c']
}

const obj2 = deepClone(obj1)
obj2.address.city = 'shanghai'
obj2.arr[0] = 'a1'
console.log(obj1.address.city)
console.log(obj1.arr[0])
