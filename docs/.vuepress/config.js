module.exports = {
  title: 'Wellcome to cocoball.',
  description: '描述',
  themeConfig: {
    lastUpdated: 'Last Updated',
    nav: [
      {
        text: '单词',
        ariaLabel: 'word Menu',
        items: [
          { text: '名词', link: '/guide/word/n/' },
          { text: '动词', link: '/guide/word/v/' }
        ]
      },
      {
        text: '语法',
        ariaLabel: 'yufa Menu2',
        items: [
          { text: '入门', link: '/guide/yufa/rumen/' },
          { text: '中级', link: '/guide/yufa/zhonji/' },
          { text: '高级级', link: '/guide/yufa/gaoji/' }
        ]
      },
      { text: '音标', link: 'https://cocoball.vip/#/yinbiao/yinbiao', target:'_blank' }
    ],
    search: true,
    searchMaxSuggestions: 10
  }
}
