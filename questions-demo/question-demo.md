## var 和 let const 区别

- var 是 ES5 语法，let const 是 ES6 语法；var 有变量提升

- var 和 let 是变量，可修改；const 是常量，不可修改

- let const 有块级作用域，var 没有

## typeof 能判断那些类型

- undefined string number boolean symbol

- object(注意，typeof null === 'object')

- function

## 列举强制类型转换和隐式类型转换

- 强制：parseInt parseFloat toString 等

- 隐式：if、逻辑运算、==、+拼接字符串

## 手写深度比较 lodash.isEqual

```javascript
// 实现如下效果
const obj1 = { a: 10, b: { x: 100, y: 200 } }
const obj2 = { a: 10, b: { x: 100, y: 200 } }
isEqual(obj1, obj2) === true
```

```javascript
const isObject = (target) => typeof target === 'object' && target !== null

const isEqual = (targetA, targetB) => {
    if (!isObject(targetA) || !isObject(targetB)) {
        return targetA === targetB
    }
    if (targetA === targetB) {
        return true
    }
    
    const targetAKeys = Object.keys(targetA)
    const targetBKeys = Object.keys(targetB)
    if (targetAKeys.length !== targetBKeys.length) {
        return false
    }
    
    for (let key in targetA) {
        const result = isEqual(targetA[key], targetB[key])
        if (!result) {
            return false
        }
    }
    return true
}
```

## 数组 slice 和 splice 区别

- 功能区别(slice - 切片，splice - 剪接)

- 参数和返回值
    - slice(startIndex, endIndex) 返回切片新数组，原数组不变
    - splice(startIndex, endIndex, ...rest) 返回剪接新数组，原数组发生改变

- 是否纯函数？
    - slice  纯函数
    - splice 非纯函数
    
## [10, 20, 30].map(parseInt)

- 结果：[10, NaN, NaN]

- 拆解
```javascript
[10, 20, 30].map((num, index) => {
    return parseInt(num, index)
})

```

## ajax 请求 get 和 post 的区别

- get 一般用于查询操作，post 一般用户提交操作

- get 参数拼接在 url 上，post 放在请求体内（数据体积可更大）

- 安全性：post 易于防止 CSRF

## 闭包是什么？有何特性？有何影响

- 回顾作用域和自由变量

- 回顾闭包应用场景：作为参数被传入，作为返回值被返回

- 回顾：自由变量的查找，要在函数定义的地方（而非执行的地方）

- 影响：变量会常驻内存，得不到释放。闭包不要乱用

## new Object() 和 Object.create() 区别

- {} 等同于 new Object()，原型 Object.prototype

- Object.create(null) 没有原型

- Object.create({...}) 可指定原型

## 判断字符串以字母开头，后面字母数字下划线，长度 6-30      常见的正则表达式

- const reg = /^[a-zA-Z]\w{5,29}$/

- 邮政编码  /\d{6}/

- 小写英文字母  /^[a-z]+$/

- 英文字母  /^[a-zA-Z]+$/

- 日期格式 2021.05.01  /^\d{4}-\d{1,2}-\d{1,2}$/

- 用户名  /^[a-zA-Z]\w{5,17}$/

- 简单的 IP 地址匹配  /\d+\.\d+\.\d+\.\d+/

## 手写字符串 trim 保证浏览器兼容性

```javascript
String.prototype.trim = function () {
    return this.replace(/^\s+/, '').replace(/\s+$/, '')
}
```

## 获取多个数字中的最大值

```javascript
function max() {
    const nums = Array.prototype.slice.call(arguments)  // 变为数组
    let max = 0
    nums.forEach(n => {
        if (n > max) {
            max = n
        }
    })
    return max
}

Math.max()
```

## 获取当前页面 url 参数

- 传统方法，查找 location.search

- 新 API， URLSearchParams

## 介绍 RAF requestAnimationFrame

- 要想动画流畅，更新频率要 60帧/s，即 16.67ms 更新一次视图

- setTimeout 要手动控制频率，而 RAF 浏览器会自动控制

- 后台标签或隐藏 iframe 中，RAF 会暂停，而 setTimeout 依然执行
