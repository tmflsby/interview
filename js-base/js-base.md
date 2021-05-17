## 1. typeof 能判断那些类型

- 识别所有值类型

- 识别函数

- 判断是否是引用类型（不可再细分）

## 2. 何时使用 === 何时使用 ==

```javascript
// 除了 == null 之外，其他都一律用 === ，例如：

const obj = { x: 100 }
if (obj.a == null) {}
// 相当于:
if (obj.a === null || obj.a === undefined) {}
```

## 3. 手写 deepClone

- 注意判断值类型和引用类型

- 注意判断是数组还是对象

- 递归

```javascript
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
```

## 4. 如何准确判断一个变量是数组

- a instanceof Array

- Object.prototype.toString.call(a)

- Array.isArray(a)

## 5. 原型关系

- 每个 class 都有显示原型 prototype

- 每个实例都有隐式原型 __proto__

- 实例的 __proto__ 指向对应 class 的 prototype

## 6. 作用域

- 全局作用域

- 函数作用域

- 块级作用域（ES6 新增）

## 7. 自由变量

- 一个变量在当前作用域没有定义，但被使用了

- 向上级作用域，一层一层一次寻找，直至找到为止

- 如果到全局作用域都没找到，则报错 xx is not defined

## 8. 闭包

- 闭包是指有权访问另一个函数作用域中的变量的函数

- 作用域应用的特殊情况，有两种表现：
  - 函数作为参数被传递
  - 函数作为返回值被返回

- 实际开发中闭包的应用
  - 隐藏数据
  - 如做一个简单的 cache 工具
  
```javascript
// 闭包隐藏数据，只提供 API
function createCache() {
    const data = {} // 闭包中的数据，被隐藏，不被外界访问
    return {
        set: function (key, val) {
            data[key] = val
        },
        get: function (key) {
            return data[key]
        }
    }
}
```

## 9. this 指向

- 箭头函数：继承作用域链上一层 this

- 普通函数：是否用 new 进行调用?
  - true：this 指向新创建的对象
  - false：是否使用 bind/apply/call 重新指向 this?
    - true：this 指向绑定的 bind/apply/call 的对象
    - false：函数调用是否使用上下文对象?
      - true：this 指向函数的上下文对象
      - false：this 默认指向window

## 10. 手写 call/apply/bind 函数

```javascript
/**
 * call方法
 * 执行fn, 使this为obj, 并将后面的n个参数传给fn(功能等同于函数对象的call方法)
 * @param {Function} fn
 * @param {Object} obj
 * @param {*} args
 * */
const call = (fn, obj, ...args) => {
  // 如果obj是undefined/null, this指定为全局对象
  if (obj === undefined || obj === null) {
    obj = globalThis // 全局对象
  }
    
  // 给obj添加一个临时方法, 方法指向的函数就是fn
  // obj.tempFn = fn
  // 通过obj来调用这个方法 ==> 也就会执行fn函数 ==> 此时fn中的this肯定为obj
  const result = obj.tempFn(...args)
  // 删除obj上的临时方法
  delete obj.tempFn
  // 返回fn执行的结果
  return result
}

/**
 * apply 方法
 * 执行fn, 使this为obj, 并将args数组中的元素传给fn(功能等同于函数对象的apply方法)
 * @param {Function} fn
 * @param {Object} obj
 * @param {Array} args
 * */
const apply = (fn, obj, args) => {
  // 如果obj是undefined/null, this指定为全局对象
  if (obj === undefined || obj === null) {
    obj = globalThis // 全局对象
  }

  // 给obj添加一个临时方法, 方法指向的函数就是fn
  obj.tempFn = fn
  // 通过obj来调用这个方法 ==> 也就会执行fn函数 ==> 此时fn中的this肯定为obj
  const result = obj.tempFn(...args)
  // 删除obj上的临时方法
  delete obj.tempFn
  // 返回fn执行的结果
  return result
}

/**
 * bind方法
 * 给fn绑定this为obj, 并指定参数为后面的n个参数 (功能等同于函数对象的bind方法)
 * @param {Function} fn
 * @param {Object} obj
 * @param {*} args
 * */
const bind = (fn, obj, ...args) => {
  // 返回一个新函数
  return (...args2) => {
    // 通过call调用原函数, 并指定this为obj, 实参为args与args2
    return call(fn, obj, ...args, ...args2)
  }
}
```

## 11. [手写 Promise](https://github.com/tmflsby/utils/blob/master/src/promise/index.js)

## 12. [event loop](https://juejin.cn/post/6844903638238756878#heading-13)

- 
