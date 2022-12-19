import type { SidebarConfig } from '@vuepress/theme-default'

export const sidebarEn: SidebarConfig = {
  '/guide/': [
    {
      text: 'Guide',
      children: [
        '/guide/README.md',
        // '/guide/getting-started.md',
        // '/guide/configuration.md',
      ],
    },
  ],
  '/advanced/': [
    {
      text: '文章',
      children: ['/advanced/README.md'],
    },
  ],
  '/reference/': [
    {
      text: '入门',
      collapsible: true,
      children: [
        '/reference/introduction/sentence.md', // 句子
        '/reference/introduction/wordmeaning.md', // 词意
        '/reference/introduction/tense.md', // 时态
      ],
    },
    {
      text: '中级',
      collapsible: true,
      children: ['/reference/intermediate/vite.md'], // 中级
    },
    {
      text: '高级',
      collapsible: true,
      children: ['/reference/senior/config.md'], // 高级
    },
    {
      text: '单词',
      collapsible: true,
      children: [
        {
          text: '入门',
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
  ],
}
