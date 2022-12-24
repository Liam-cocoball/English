module.exports = {
  title: 'Wellcome to cocoball.',
  description: '描述',
  themeConfig: {
    sidebar: 'auto',
    lastUpdated: 'Last Updated',
    nav: [
      { text: '首页', link: '/' },
      {
        text: '单词',
        ariaLabel: 'word Menu',
        items: [
          { text: '名词',  ariaLabel: 'n Menu',
          items: [
            { text: '人名词', link: '/guide/word/n/' }
          ]
        },
          { text: '动词',ariaLabel: 'n Menu',
          items: [
            { text: 'vt', link: '/guide/word/n/' },
            { text: 'vi', link: '/guide/word/n/' },
          ]
        }
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
      { text: '音标', link: 'http://yinbiao.cocoball.vip/#/yinbiao/yinbiao', target:'_blank' }
    ],
    search: true,
    searchMaxSuggestions: 10
  },
  plugins: [
    [
      '@vuepress/blog',
      {
        directories: [
          {
            // 当前分类的唯一 ID
            id: 'post',
            // 目标文件夹
            dirname: '_posts',
            // `entry page` (或者 `list page`) 的路径
            path: '/post/',
            itemPermalink: '/post/:year/:month/:day/:slug',
            layout: 'MyIndexPost',
            itemLayout: 'MyPost',
          },
        ],
      },
    ],
  ],
}
