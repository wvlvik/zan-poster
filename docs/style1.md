# 应用场景
商品详情 - 商品主图生成

## 效果
![image.png](https://www.tapd.cn/tfl/pictures/202401/tapd_50372234_1705737821_793.png)

## 模板

```js
{
    width: 800,
    height: 800,
    fillStyle: '#fff',
    children: [
      {
        type: 'rect',
        width: 800,
        height: 630,
        linearGradient: [0, 0, 0, 630],
        colors: [[0, '#696AAC'], [1, '#fff']],
      },
      {
        type: 'rect',
        width: 800,
        height: 170,
        x: 0,
        y: 630,
        linearGradient: [0, 0, 0, 250],
        colors: [[0, '#fff'], [1, '#696AAC']],
      },
      {
        type: 'image',
        url: 'https://image.jbzyun.cn/9538/2024/material/image/8ac3c92f244148cea431271f42f1de11.jpeg',
        width: 780,
        height: 650,
        x: 10,
        y: 10,
      },
      {
        type: 'group',
        x: 30,
        y: 660,
        display: 'row',
        children: [
          {
            type: 'text',
            text: '蕴含多种天华然植物精华精然植物精然植物精华精然植物精精',
            font: '44px Arial',
            color: '#212121',
            maxLine: 1,
            maxWidth: 500,
            width: 500,
            x: 0,
            y: 50,
          },
          {
            type: 'group',
            x: 15,
            y: 10,
            width: 220,
            children: [
              {
                type: 'group',
                x: 30,
                y: 0,
                display: 'row',
                align: 'center',
                width: 200,
                children: [
                  {
                    type: 'text',
                    text: '￥',
                    font: '42px Arial',
                    color: '#383935',
                    x: 0,
                    y: 30,
                  },
                  {
                    type: 'text',
                    text: '989',
                    font: '80px JDZhengHT',
                    color: '#383935',
                    x: -5,
                    y: 0,
                  },
                ],
              },
              {
                type: 'rect',
                width: 160,
                height: 40,
                fillStyle: '#696AAC',
                r: 20,
                x: 60,
                y: 75,
              },
              {
                type: 'group',
                x: 20,
                y: 75,
                display: 'row',
                align: 'center',
                width: 232,
                children: [
                  {
                    type: 'text',
                    text: '立省',
                    font: '18px Arial',
                    color: '#fff',
                    x: 10,
                    y: 14,
                  },
                  {
                    type: 'text',
                    text: '￥',
                    font: '20px Arial',
                    color: '#fff',
                    x: -2,
                    y: 14,
                  },
                  {
                    type: 'text',
                    text: '128',
                    font: '32px Arial',
                    color: '#fff',
                    x: -4,
                    y: 6,
                  },
                ],
              },
            ],
          },
        ],
      },
    ],
  }
```