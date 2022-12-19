import type { NavbarConfig } from '@vuepress/theme-default'

export const navbarEn: NavbarConfig = [
  {
    text: 'Guide',
    link: '/guide/',
  },
  {
    text: '语法',
    children: [
      {
        text: '入门',
        children: [
          {
            text: '语法',
            link: '/reference/introduction/sentence.md',
          },
          '/reference/introduction/wordmeaning.md',
          '/reference/introduction/tense.md',
        ],
      },
      {
        text: '中级',
        children: ['/reference/intermediate/vite.md'],
      },
      {
        text: '高级',
        children: ['/reference/senior/config.md'],
      },
    ],
  },
  {
    text: '单词',
    children: [
      {
        text: '名词',
        children: [
          '/reference/introduction/word/n.md',
          '/reference/introduction/word/v.md',
          '/reference/introduction/word/adj.md',
          '/reference/introduction/word/pron.md',
        ],
      },
      {
        text: '中级',
        children: ['/reference/intermediate/word/vite.md'],
      },
      {
        text: '高级',
        children: ['/reference/senior/word/config.md'],
      },
    ],
  },
  {
    text: '文章',
    children: [
      {
        text: '入门',
        children: ['/advanced'],
      },
    ],
  },
  {
    text: '音标',
    link: 'https://yinbiao.cocoball.vip/#/yinbiao/yinbiao',
  },
]
