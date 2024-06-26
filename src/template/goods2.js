export default {
  width: 750,
  height: 1250,
  fillStyle: '#fff',
  fonts: [
    {
      family: 'JDZhengHT',
      source:
    'https://image.jbzyun.cn/statics/font/jbz-iconfont/JDZhengHT-regular.ttf',
    },
  ],
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
          text: '魔鬼**朋友的推荐',
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
        'https://image.jbzyun.cn/9538/2024/material/image/e631be6049424f6c92a08800d55d9795.jpg',
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
          text: '99.99',
          font: '70px JDZhengHT',
          color: '#212121',
          textAlign: 'left',
          x: 0,
          y: 0,
        },
        {
          type: 'text',
          text: '原价￥219.0',
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
      y: 1086,
      children: [
        {
          type: 'text',
          text: ' 商品标题通吃猫酷酷通吃猫 酷酷通吃猫 酷酷通吃猫 酷酷通吃猫 酷酷',
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
      y: 1040,
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
