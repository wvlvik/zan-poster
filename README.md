# 概述
满足各种海报绘制需求，推荐小程序海报分享等场景使用


> 通过json直接在canvas上绘制图像, 基于 [cax](https://github.com/dntzhang/cax) 画图框架开发, 改进优化自 [json2canvas](https://github.com/willnewii/json2canvas.git)

## 样例
在`docs/`目录中，`style{number}.md`的文件， **后期将持续更新新画图特性的样例**


![image.png](/docs/image/image22.png)

## 🦖 小程序组件

> 小程序使用npm安装第三方包，详见 [npm 支持](https://developers.weixin.qq.com/miniprogram/dev/devtools/npm.html?search-key=npm)

### 项目配置

> zan-poster安装后大小41kb, 如果小程序主包超出2M，可采用[分包异步化](https://developers.weixin.qq.com/miniprogram/dev/framework/subpackages/async.html)方案

1. npm i zan-poster
2. 微信开发者工具 -> 工具 -> 构建npm
3. app.json配置中引入Component

```json
{
  "usingComponents": {
    "zan-poster": "/miniprogram_npm/zan-poster/index"
  }
}
```

### 组件使用

#### 方式一: props和事件

```html
<zan-poster painting="{{painting}}" bind:change="onChange" />
```

```js
Page({
  data: {
    painting: {}
  },
  ready() {
    // 设置画图数据
    this.setData({
      painting: {}
    })
  },
  methods: {
    onChange(array) {
      // 接收画图数据
      // [{ tempFilePath: 'xxx', errMsg: 'drawer:ok' }]
    }
  }
})
```

**属性**

| 名称        | 类型          | 默认值 | 必填 | 说明                                                                                |
| ----------- | ------------- | ------ | ---- | ----------------------------------------------------------------------------------- |
| painting    | Object、Array | {}     | 是   | 画图数据, 以数组的形式传入多组画图数据实现多张海报绘制 (回调方式绘制与此一致)       |
| showCanvas  | Boolean       | false  | 否   | 是否显示画板                                                                        |
| preload     | Boolean       | false  | 否   | 图片、字体预加载(注意：预加载完成后，开始启动画图需设置为false，否则画图将不会启动) |
| showLoading | Boolean       | true   | 否   | 是否显示画图loading进度状态，且无法穿透(H5不支持)                                   |

**事件**

| 名称   | 类型     | 必填 | 返回类型                                 | 说明             |
| ------ | -------- | ---- | ---------------------------------------- | ---------------- |
| change | Function | 否   | [{tempFilePath: string, errMsg: string}] | 完成画图触发事件 |

#### 方式二: 模板引用

> 组件对外提供draw回调方法画图

```html
<zan-poster id="myPoster" />
```

```js
Page({
  data: {
    // Object | Array
    painting: {}
  },
  ready() {
    const poster = this.selectComponent('#myPoster')

    // 1: 回调
    poster.draw({
      // 设置画图数据
      painting: this.data.painting,
      success(array) {
        // 接收画图数据
        // [{ tempFilePath: 'xxx', errMsg: 'drawer:ok' }]
      },
      fail() {}
    })

    // 2: promise
    poster.draw({
      // 设置画图数据
      painting: this.data.painting
    }).then((array) => {
      // 接收画图数据
      // [{ tempFilePath: 'xxx', errMsg: 'drawer:ok' }]
    }).catch(console.log)
  }
})
```

## 🐮 web组件

> web端组件采用浏览器原生web component开发，顾使用者浏览器需支持web component特性 (移动端完全支持)

### 通过npm或CDN引用

**NPM**

```shell
npm i zan-poster
```

**CDN**

- https://cdn.jsdelivr.net/npm/zan-poster/dist/zan-component/zan-component.esm.js
- https://unpkg.com/zan-poster@latest/dist/zan-component/zan-component.esm.js

### 使用

**vue2**

> main.js中引入及配置

```js
import Vue from 'vue'
import 'zan-poster/dist/zan-component/zan-component.esm'

Vue.config.ignoredElements = [/^zan-/]
```

**vue3**

> main.js中引入及配置

```js
import Vue from 'vue'
import 'zan-poster/dist/zan-component/zan-component.esm'

const app = Vue.createApp({ /* ... */ })
app.config.isCustomElement = tag => tag.startsWith('zan-')
```

**web**
```html
<script type="module" src="https://cdn.jsdelivr.net/npm/zan-poster/dist/zan-component/zan-component.esm.js"></script>
```

**页面或模板中使用**

> 组件props，参考小程序组件说明，web端尽量使用draw回调方法画图

```html
<zan-poster></zan-poster>
```

```js
// 画图数据
const painting = {}

async function createPoster() {
  await customElements.whenDefined('zan-poster')
  const ZanPoster = document.querySelector('zan-poster')

  ZanPoster.draw({
    painting
  }).then((array) => {
    // 接收画图数据
    // [{ tempFilePath: 'xxx', errMsg: 'drawer:ok' }]
  })
}
createPoster()
```

## 🦉 画图数据类型及属性参照表

### Canvas（画布）

| 属性      | 类型   | 默认值 | 必填 | 说明                                                                                                 |
| --------- | ------ | ------ | ---- | ---------------------------------------------------------------------------------------------------- |
| width     | Number |        | 是   | 画布宽度                                                                                             |
| height    | Number |        | 是   | 画布高度                                                                                             |
| x         | Number | 0      | 否   | 相对于画布左侧的距离                                                                                 |
| y         | Number | 0      | 否   | 相对于画布顶部的距离                                                                                 |
| fillStyle | String |        | 否   | 背景色，十六进制，例："#ffffff"                                                                      |
| url       | String |        | 否   | 背景图，支持本地和网络图片，注意https                                                                |
| children  | Array  |        | 否   | 子元素数组                                                                                           |
| fonts     | Array  |        | 否   | 字体列表, [{family: string, source: string }] family字体名(需要和使用中指定名称一致), source字体路径 |

### 容器 (container)

> 实现一列或多列排版，画板高度将根据容器高度自动改变；且容器children一级子元素只接受type=group类型，否则无效

| 属性     | 类型           | 默认值         | 必填 | 说明                                                    |
| -------- | -------------- | -------------- | ---- | ------------------------------------------------------- |
| type     | String         | container      | 是   | 类型                                                    |
| width    | Number         | {canvas.width} | 否   | 宽度，默认画布宽度                                      |
| height   | Number、String | 'auto'         | 否   | 高度，默认auto, 如果设置了值，高度则固定不变            |
| x        | Number         | 0              | 否   | 相对于父元素左侧的距离                                  |
| y        | Number         | 0              | 否   | 相对于父元素顶部的距离                                  |
| children | Array          |                | 否   | 子元素数组 (一级子元素只接受type=group类型，且高度必填) |

### Group（组）

| 属性      | 类型   | 默认值 | 必填 | 说明                                                                                |
| --------- | ------ | ------ | ---- | ----------------------------------------------------------------------------------- |
| type      | String | group  | 是   | 绘制类型                                                                            |
| width     | Number |        | 是   | 宽度                                                                                |
| height    | Number |        | 是   | 高度                                                                                |
| x         | Number | 0      | 否   | 相对于父元素左侧的距离                                                              |
| y         | Number | 0      | 否   | 相对于父元素顶部的距离                                                              |
| fillStyle | String |        | 否   | 背景色，支持十六进制和RGB，例："#ffffff",rgba(0,0,0,1)                              |
| url       | String |        | 否   | 背景图，支持本地和网络图片，注意https                                               |
| children  | Array  |        | 否   | 子元素数组                                                                          |
| display   | String |        | 否   | row、column、justify 设置平铺方式; justify将移除第一个元素(排除内容为空元素)x坐标值 |
| align     | String |        | 否   | left、center、right 对齐方式，需设置display=row 且 width != 0                       |

### Text（文本）

| 属性           | 类型    | 默认值 / 示例                        | 必填 | 说明                                                                                       |
| -------------- | ------- | ------------------------------------ | ---- | ------------------------------------------------------------------------------------------ |
| type           | String  | text                                 | 是   | 绘制类型                                                                                   |
| height         | Number  |                                      | 是   | 如果文本为动态内容可设置为'auto'                                                           |
| uiHeight       | Number  |                                      | 否   | 如果是动态内容，可设置文本区域最大高度                                                     |
| x              | Number  | 0                                    | 否   | 相对于父元素左侧的距离                                                                     |
| y              | Number  | 0                                    | 否   | 相对于父元素顶部的距离                                                                     |
| text           | String  |                                      | 是   | 文本内容                                                                                   |
| font           | String  | '10px sans-serif'                    | 否   | 字体及大小，例：'24px 微软雅黑'                                                            |
| color          | String  | 'black'                              | 否   | 字体颜色                                                                                   |
| textAlign      | String  | 'left'                               | 否   | 'left'，'center'，'right'                                                                  |
| baseline       | String  | 'top'                                | 否   | 'bottom'，'alphabetic'，'ideographic'，'top'，'hanging'                                    |
| orientation    | String  | ‘horizontal’                         | 否   | 文字方向,‘horizontal’ 或 ‘vertical’                                                        |
| maxWidth       | Number  |                                      | 否   | 最大宽度(设置后会自动换行,需要和lineHeight配合使用)                                        |
| lineHeight     | Number  |                                      | 否   | 行高                                                                                       |
| maxLine        | Number  |                                      | 否   | 最大行数,超出则显示...                                                                     |
| shadow         | Object  | {color,offsetY,offsetYblur}          | 否   | 阴影                                                                                       |
| linearGradient | Object  | [x1,y1,x2,y2]                        | 否   | 渐变点起始坐标，同canvas createLinearGradient，超过4个值将改变为radialGradient             |
| colors         | Array   | [[0,'#CCC'],[0.2,'#AAA'],[1,'#AAA']] | 否   | 填充颜色，同canvas addColorStop                                                            |
| pin            | Boolean |                                      | 否   | 固定位置(如果你有元素放在了动态文本的下方,又不希望这个元素位置被更新,可以设置该属性为true) |
| filter         | String  |                                      | 否   | [css滤镜](https://developer.mozilla.org/zh-CN/docs/Web/CSS/filter)                         |
| lineDecoration | String  |                                      | 否   | 'top', 'middle', 'bottom'; 划线显示位置，为空则不显示 (支持多行)                           |
| lineColor      | String  | 跟随字体颜色                         | 否   | 颜色                                                                                       |
| lineSize       | Number  | 2                                    | 否   | 线条粗细                                                                                   |
| lineOffsetTop  | Number  | 0                                    | 否   | 线条上下偏移量(正往下，负往上)                                                             |
| lineOffsetLeft | Number  | 0                                    | 否   | 线条左右偏移量(正往右，负往左)                                                             |
| lineLevel      | String  | 'top'                                | 否   | 'top', 'bottom' 线条置于文字顶部或底部                                                     |

### Image（图片）

| 属性       | 类型           | 默认值 / 示例 | 必填 | 说明                                                                        |
| ---------- | -------------- | ------------- | ---- | --------------------------------------------------------------------------- |
| type       | String         | image         | 是   | 绘制类型                                                                    |
| width      | Number         |               | 是   | 宽度                                                                        |
| height     | Number、String |               | 是   | 高度、auto(设置'auto'时，maxHeight必填，实现高度自动，暂时仅支持第一级元素) |
| x          | Number         | 0             | 否   | 相对于父元素左侧的距离                                                      |
| y          | Number         | 0             | 否   | 相对于父元素顶部的距离                                                      |
| isCircular | Boolean        | false         | 否   | 圆，以短边为直径                                                            |
| maxHeight  | Number         | 实际最大高度  | 否   | 实际可接受图片的最大高度(注意: IOS下最大高度4096/2px，设置完一定得真机测试) |
| isCenter   | Boolean        | false         | 否   | 以短边为准，居中                                                            |
| filter     | String         |               | 否   | [css滤镜](https://developer.mozilla.org/zh-CN/docs/Web/CSS/filter)          |

### Circle（圆）

| 属性           | 类型    | 默认值 / 示例 | 必填                                      | 说明                                                                 |
| -------------- | ------- | ------------- | ----------------------------------------- | -------------------------------------------------------------------- |
| type           | String  | circle        | 是                                        | 绘制类型                                                             |
| width          | Number  |               | 是                                        | 宽度                                                                 |
| height         | Number  |               | 是                                        | 高度                                                                 |
| x              | Number  | 0             | 否                                        | 相对于父元素左侧的距离                                               |
| y              | Number  | 0             | 否                                        | 相对于父元素顶部的距离                                               |
| r              | Number  | 20            | 否                                        | 半径                                                                 |
| strokeStyle    | Number  |               | 否                                        | 边框颜色，例：'#FFFFFF'                                              |
| rt,rb,lt,lb    | Boolean | true          | 分别控制四个角是否圆角，上,右下,左上,左下 |
| strokeStyle    | String  |               | 否                                        | 边框颜色，例：'#FFFFFF'                                              |
| lineWidth      | String  | 1             | 否                                        | 边框宽度                                                             |
| fillStyle      | String  |               | 否                                        | 填充颜色，例：#FFFFFF                                                |
| linearGradient | String  |               | 否                                        | 渐变点起始坐标 [x1,y1,x2,y2]，同createLinearGradient                 |
| colors         | String  |               | 否                                        | 填充颜色，例： [[0,'#CCC'],[0.2,'#AAA'],[1,'#AAA']]，同 addColorStop |
| filter         | String  |               | 否                                        | [css滤镜](https://developer.mozilla.org/zh-CN/docs/Web/CSS/filter)   |

### Rect（矩形）

| 属性           | 类型    | 默认值 / 示例 | 必填                                        | 说明                                                                                                       |
| -------------- | ------- | ------------- | ------------------------------------------- | ---------------------------------------------------------------------------------------------------------- |
| type           | String  | rect          | 是                                          | 绘制类型                                                                                                   |
| width          | Number  |               | 是                                          | 宽度                                                                                                       |
| height         | Number  |               | 是                                          | 高度                                                                                                       |
| x              | Number  | 0             | 否                                          | 相对于父元素左侧的距离                                                                                     |
| y              | Number  | 0             | 否                                          | 相对于父元素顶部的距离                                                                                     |
| r              | Number  | 20            | 否                                          | 半径                                                                                                       |
| strokeStyle    | Number  |               | 否                                          | 边框颜色，例：'#FFFFFF'                                                                                    |
| rt,rb,lt,lb    | Boolean | true          | 分别控制四个角是否圆角，右上,右下,左上,左下 |
| strokeStyle    | String  |               | 否                                          | 边框颜色，例：'#FFFFFF'                                                                                    |
| lineWidth      | String  | 1             | 否                                          | 边框宽度                                                                                                   |
| fillStyle      | String  |               | 否                                          | 填充颜色，例：#FFFFFF                                                                                      |
| linearGradient | String  |               | 否                                          | 渐变点起始坐标 [x1,y1,x2,y2]，同createLinearGradient，例：[0,0,100,0]由左向右渐变，[0,0,0,100]由上向下渐变 |
| colors         | Array   |               | 否                                          | 填充颜色，也可理解为颜色节点，例：[[0,'#CCC'],[0.2,'#AAA'],[1,'#AAA']]，同 addColorStop                    |
| filter         | String  |               | 否                                          | [css滤镜](https://developer.mozilla.org/zh-CN/docs/Web/CSS/filter)                                         |

## 🦨 画图数据示例

> 系统字体参考: https://segmentfault.com/a/1190000011827800

```json
{
  "width": 750,
  "height": 1370,
  "fillStyle": "#FFFFFF",
  "children": [
    {
      "type": "group",
      "width": 600,
      "height": 460,
      "x": 0,
      "y": 0,
      "children": [
        {
          "type": "text",
          "text": "内容",
          "maxWidth": 580,
          "lineHeight": 40,
          "textAlign": "right",
          "font": "30px BlinkMacSystemFont",
          "color": "#333333",
          "height": "auto",
          "uiHeight": 200,
          "x": 30,
          "y": 30
        },
        {
          "type": "image",
          "width": 100,
          "height": 200,
          "x": 30,
          "y": 260,
          "url": "https://image.jbzyun.cn/9538/2024/material/image/0ed8ce48e3b24ab5a18f4e36ea69af00.png",
          "isCircular": true,
          "r": 10
        }
      ]
    }
  ]
}
```

## 😇 说明

此版本只提供画图能力, 交互及动画都已去除

- 升级小程序canvas API
- 图片、字体预加载
- 增加自定义字体
- 自适应高度
- 横竖平铺排版
- 容器内单列、多列排版
- 修复了图片容器若干问题
- 集成阿里和七牛裁图能力
- 文字划线(支持多行)
- 容器垂直排版
