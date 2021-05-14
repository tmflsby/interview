## 1. 如何理解语义化

- 让人更容易读懂（增加代码可读性）

- 让搜索引擎更容易读懂（SEO）

## 2. 块状元素 & 内联元素

- display: block/table; 有div h1 h2 table ul ol p 等

- display: inline/inline-block; 有span img input button 等

## 3. 盒模型宽度计算

- 盒模型： content + padding + border + margin

- offsetWidth/offsetHeight = (内容宽度 + 内边距 + 边框)， 无外边距
  
- 标准盒模型: width/height = content

- ie盒模型: width/height = content + padding + border

## 4. margin 纵向重叠问题

- 相邻元素的 margin-top 和 margin-bottom 会发生重叠

- 空白内容的<p></p>也会重叠

## 5. margin 负值问题

- margin-top 和 margin-left 负值，元素向上、向左移动

- margin-right 负值，右侧元素左移，自身不受影响

- margin-bottom 负值，下方元素上移，自身不受影响

## 6. BFC 理解与应用

- Block format context ，块级格式化上下文

- 一块独立渲染区域，内部元素的渲染不回影响边界以外的元素

`形成 BFC 的常见条件`

- float 不是 none

- position 是 absolute 或 fixed

- overflow 不是 visible

- display 是 flex inline-block 等

`BFC 的常见应用`

- 清除浮动

## 7. float 布局

`圣杯布局和双飞翼布局的目的`

- 三栏布局，中间一栏最先加载和渲染（内容最重要）

- 两侧内容固定，中间内容随着宽度自适应

- 一般用于PC网页

`圣杯布局和双飞翼布局的技术总结`

- 使用 float 布局

- 两侧使用 margin 负值，以便和中间内容横向重叠

- 防止中间内容被两侧覆盖，一个用 padding 一个用 margin

`手写 clearfix`

```css
.clearfix:after {
    content: '';
    display: table;
    clear: both;
}
.clearfix {
    *zoom: 1;  /* 兼容ie低版本 */
}
```

## 8. flex 布局

`常用语法`

- flex-direction
  
- justify-content

- align-items

- flex-wrap

- align-self

```css
/* flex画三个点色子 */
.box {
    display: flex; /* flex 布局 */
    justify-content: space-between; /* 两端对齐 */
}
.item {
   /* 背景色、大小、边框等 */
}
.item:nth-child(2) {
    align-self: center; /* 第二项居中对齐 */
}
.item:nth-child(3) {
    align-self: flex-end; /* 第三项尾对齐 */
}
```

## 9. absolute 和 relative 定位

- relative 依据自身定位

- absolute 依据最近一层的定位元素定位

`定位元素`

- absolute relative fixed

- body

## 10. 水平居中

- inline 元素： text-align: center

- block 元素: margin: auto

- absolute 元素: left: 50% + margin-left 负值

## 11. 垂直居中

- inline 元素: line-height 的值等于 height 值

- absolute 元素: top: 50% + margin-top 负值
  
- absolute 元素: transform: translate(-50%, -50%)
  
- absolute 元素: top,left,bottom,right = 0 + margin: auto

## 12. line-height 如何继承

- 写具体数值，如 30px ，则继承该值（比较好理解）

- 写比例，如 2 / 1.5 ，则继承该比例（比较好理解）

- 写百分比，如 200% ，则继承计算出来的值（考点）

## 13. rem 是什么

`rem 是一个长度单位`

- px 绝对长度单位，最常用

- em 相对长度单位，相对于父元素，不常用

- rem 相对长度单位，相对于根元素，常用于响应式布局

## 14. 响应式布局的常用方案

- media-query 根据不同的屏幕宽度设置根元素 font-size

- rem 基于根元素的相对单位

## 15. vw / vh

`网页视口尺寸`

- window.screen.height 屏幕高度

- window.innerHeight 网页视口高度

- document.body.clientHeight body高度

`vw / vh`

- vh 网页视口高度的 1 / 100
  
- vw 网页视口宽度的 1 / 100

- vmax 取两者最大值；vmin 取两者最小值
