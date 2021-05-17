# event loop

- JS 是单线程运行的

- 异步要基于回调来实现

- event loop 就是异步回调的实现原理

## JS 如何执行

- 从前到后，一行一行执行

- 如果某一行执行报错，则停止下面代码的执行

- 先把同步代码执行完，再执行异步

## event loop 过程

- 同步代码，一行一行放在 Call Stack 执行

- 遇到异步，会先“记录”下，等待时机（定时，网络请求等）

- 时机到了，就移动到 Callback Queue

- 如果 Call Stack 为空（即同步代码执行完）Event Loop 开始工作

- 轮询查找 Callback Queue ，如有则移动到 Call Stack 执行

- 然后继续轮询查找（永动机一样）


## DOM 事件 和 Event Loop

- JS 是单线程运行的

- 异步（setTimeout,ajax等）使用回调，基于 event loop

- DOM 事件也使用回调，基于 event loop

```js
console.log('Hi')

setTimeout(function cb1() {
    console.log('cb1') // cb 即 callback
}, 5000)

console.log('Bye')
```

```html
<button id="btn1">提交</button>

<script>
console.log('Hi')

$('#btn1').click(function () {
    console.log('button clicked')
})

console.log('Bye')
</script>
```
