## 从输入 url 到渲染页面的整个过程

### 加载过程

- DNS 解析：域名 --> IP 地址

- 浏览器根据 IP 地址向服务器发起 http 请求

- 服务器处理 http 请求，并返回给浏览器

### 渲染过程

- 根据 HTML 代码生成 DOM Tree

- 根据 CSS 代码生成 CSSOM

- 将 DOM Tree 和 CSSOM 整合形成 Render Tree

- 根据 Render Tree 渲染页面

- 遇到`<script>`则暂停渲染，优先加载并执行 JS 代码，完成再继续

- 直至把 Render Tree 渲染完成

## window.onload 和 DOMContentLoaded 的区别

```javascript
window.addEventListener('load', function () {
  // 页面的全部资源加载完成才会执行，包括图片、视频等
})

window.addEventListener('DOMContentLoaded', function () {
  // DOM 渲染完即可执行，此时图片、视频还可能没有加载完
})
```

## 前端性能优化

- 减少资源体积：压缩代码

- 减少访问次数：合并代码，SSR 服务端渲染，缓存

- 使用更快的网络：CDN

- 懒加载（图片懒加载，上滑加载更多）

- 对 DOM 查询进行缓存，频繁 DOM 操作合并到一起插入 DOM 结构

- 节流 throttle 防抖 debounce

```javascript
const throttle = (callback, wait) => {
  let star = 0
  return (e) => {
    let now = new Date()
    if (now - star >= wait) {
      callback.call(this, e)
      star = now
    }
  }
}

const debounce = (callback, wait) => {
  let timer = null
  return (e) => {
    if (timer !== null) {
      clearTimeout(timer)
    }

    timer = setTimeout(() => {
      callback.call(this, e)
      timer = null
    }, wait)
  }
}
```

