# 应用场景
分享 - 店铺海报

> 根据图片尺寸动态高度变化

## 效果
![image.png](/docs/image/image4.png)

## 模板

```js
{
    width: 750,
    height: 1624,
    scale: 1,
    fillStyle: '#fff',
    children: [
      {
        type: 'image',
        url:
          'https://xs.c3tech.cn/9599/2023/material/image/e2b3bb7f1163457d9b9460e27f7c9151.png',
        width: 750,
        height: 'auto',
        maxHeight: 1442,
        isCenter: true,
        x: 0,
        y: 0,
      },
      {
        type: 'text',
        text: 'Thursday 星期四',
        font: '40px Arial',
        color: '#1F1F1F',
        textAlign: 'left',
        x: 50,
        y: 1492,
      },
      {
        type: 'group',
        x: 50,
        y: 1550,
        width: 650,
        display: 'row',
        align: 'left',
        children: [
          {
            type: 'text',
            text: '2023-12-12',
            font: '22px AvenirNext-Bold',
            color: '#1F1F1F',
            textAlign: 'left',
            x: 0,
            y: 0,
          },
          {
            type: 'image',
            url:
              'https://xs.c3tech.cn/9599/2023/material/image/b4c787285aef4056bd0dc82590255bd1.png',
            isCircular: true,
            width: 32,
            height: 32,
            x: 10,
            y: -7,
          },
          {
            type: 'text',
            text: '天王盖地虎, 已连签2天',
            font: '22px Arial',
            color: '#1F1F1F',
            textAlign: 'left',
            x: 10,
            y: 0,
          },
        ],
      },
      {
        type: 'circle',
        r: 98,
        fillStyle: '#fff',
        x: 517,
        y: 1426,
      },
      {
        type: 'image',
        url:
          'https://xs.c3tech.cn/9599/2023/material/image/d36852f80f74434892d026f64dcf8579.png',
        width: 150,
        height: 150,
        x: 540,
        y: 1450,
      },
    ],
  }
```