# 应用场景
商品详情 - 用户分享商品

## 效果
![image.png](/docs/image/image2.png)

## 模板

```js
{
    width: 750,
    height: 1220,
    fillStyle: '#fff',
    children: [
      {
        type: 'group',
        width: 670,
        x: 40,
        y: 40,
        children: [
          {
            type: 'image',
            url:
              'https://image.jbzyun.cn/9538/2024/material/image/4938d86de6094f3aba6d12d59a047a07.jpg',
            width: 90,
            height: 90,
            x: 0,
            y: 8,
            isCircular: true,
          },
          {
            type: 'text',
            text: '魔鬼🐠**朋友的推荐',
            font: '32px Arial',
            color: '#212121',
            textAlign: 'left',
            x: 108,
            y: 20,
          },
          {
            type: 'text',
            text: '值得买的好宝贝, 别错过哟~',
            font: '24px Arial',
            color: '#8E8E8E',
            textAlign: 'left',
            x: 108,
            y: 66,
          },
        ],
      },
      {
        type: 'image',
        url:
          'https://image.jbzyun.cn/9538/2024/material/image/8ac3c92f244148cea431271f42f1de11.jpeg',
        width: 750,
        height: 750,
        x: 0,
        y: 180,
      },
      {
        type: 'group',
        width: 670,
        height: 80,
        x: 40,
        y: 980,
        display: 'row',
        children: [
          {
            type: 'text',
            text: '￥',
            font: '32px Arial',
            color: '#212121',
            textAlign: 'left',
            x: 0,
            y: 28,
          },
          {
            type: 'text',
            text: '399.00',
            font: '70px Arial',
            color: '#212121',
            textAlign: 'left',
            x: 2,
            y: 0,
          },
          {
            type: 'text',
            text: '原价￥1989.0',
            font: '26px Arial',
            color: '#8E8E8E',
            textAlign: 'left',
            x: 10,
            y: 31,
          },
        ],
      },
      {
        type: 'group',
        width: 670,
        x: 40,
        y: 1076,
        children: [
          {
            type: 'text',
            text: '🦖商品通吃猫😂名字叫做 Beauty cat, 颜色是金色 爪子颜色不知道, 就爱吃🐠',
            font: '35px Arial',
            color: '#212121',
            textAlign: 'left',
            lineHeight: 50,
            uiHeight: 90,
            maxWidth: 400,
            maxLine: 2,
            x: 0,
            y: 0,
          },
        ],
      },
      {
        type: 'group',
        width: 670,
        x: 40,
        y: 1000,
        display: 'row',
        align: 'right',
        children: [
          {
            type: 'image',
            url: 'https://image.jbzyun.cn/9538/2024/material/image/ac73e958f31342878aa1185a16bde063.png',
            width: 170,
            height: 170,
          },
        ],
      },
    ],
  }
```