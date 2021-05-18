# DOM

DOM（Document Object Model——文档对象模型）是用来呈现以及与任意 HTML 或 XML文档交互的API。
DOM 是载入到浏览器中的文档模型，以节点树的形式来表现文档，每个节点代表文档的构成部分（例如:页面元素、字符串或注释等等）。

## DOM 操作常用 API

- DOM 节点操作

- DOM 结构操作

- attribute 和 property

## property 和 attribute

- property：修改对象属性，不会体现到 html 结构中

- attribute：修改 html 属性，会改变 html 结构

- 两者都有可能引起 DOM 重新渲染

## DOM 结构操作

- 新增/插入节点

- 获取子元素列表，获取父元素

- 删除子元素

## DOM 性能

- DOM 操作非常“昂贵”，避免频繁的 DOM 操作

- 对 DOM 查询做缓存

- 将频繁操作改为一次性操作  document.createDocumentFragment()

## BOM

- navigator

- screen

- location

- history

```javascript
// navigator
const ua = navigator.userAgent
const isChrome = ua.includes("Chrome")
console.log(isChrome)

// screen
console.log(screen.width)
console.log(screen.height)

// location
console.log(location.href)
console.log(location.protocol)
console.log(location.pathname)
console.log(location.search)
console.log(location.hash)

// history
history.back()
history.forward()
```

## 事件冒泡的流程

- 基于 DOM 树形结构

- 事件会顺着触发元素往上冒泡

- 应用场景：代理

## 事件代理

- 代码简洁

- 减少浏览器内存占用

- 但是，不要滥用

## [手写 AJAX](https://github.com/tmflsby/utils/blob/master/src/axios/index.js)

```javascript
const xhr = new XMLHttpRequest()
xhr.open('GET', '/data/test.json', true)
xhr.onreadystatechange = function () {
    if (xhr.readyState === 4) {
        if (xhr.status === 200) {
            console.log(
                JSON.parse(xhr.responseText)
            )
        } else if (xhr.status === 404) {
            console.log('404 not found')
        }
    }
}
xhr.send(null)
```

### xhr.readyState

- 0-（未初始化）还没有调用send()方法

- 1-（载入）已调用send()方法，正在发送请求

- 2-（载入完成）send()方法执行完成，已经接收到全部响应内容

- 3-（交互）正在解析响应内容

- 4-（完成）响应内容解析完成，可以在客户端调用

### xhr.status

- 2xx-表示成功处理请求，如 200
  
- 3xx-需要重定向，浏览器直接跳转，如 301 302 304
  
- 4xx-客户端请求错误，如 403 404
  
- 5xx-服务器端错误

## 同源策略

- ajax 请求时，浏览器要求当前网页和 server 必须同源（安全）

- 同源：协议、域名、端口，三者必须一致

## 加载图片 css js 可无视同源策略

- `<img src="跨域的图片地址"  alt=""/>`

- `<link href="跨域的css地址" />`

- `<script src="跨域的js地址"></script>`

- `<img />`可用于统计打点，可使用第三方统计服务

- `<link /><script>`可使用 CDN ，CDN 一般都是外域

- `<script>`可实现 JSONP

## 跨域

- 所有的跨域，都必须经过 server 端允许和配合

- 未经 server 端允许就实现跨域，说明浏览器有漏洞，危险信号

## [常见跨域的方式](https://juejin.cn/post/6844903767226351623)

- JSONP

- CORS - 服务器设置 http header

## cookie localStorage sessionStorage 区别

### cookie

- 本身用于浏览器和 server 通讯
  
- 被”借用“到本地存储来
  
- 可用 document.cookie = '...' 来修改

### cookie 的缺点

- 存储大小，最大 4kb

- http 请求时需要发送到服务端，增加请求数据量

- 只能用 document.cookie = '...' 来修改，太过简陋

### localStorage 和 sessionStorage

- HTML5 专门为存储而设计，最大可存 5M

- API 简单易用 setItem getItem

- 不会随着 http 请求被发送出去

- localStorage 数据会永久存储，除非代码或手动删除

- sessionStorage 数据只存在于当前会话，浏览器关闭则清空

- 一般用 localStorage 会更多一些
