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
            link: '/reference/cli.html',
          },
          '/reference/config.md',
          '/reference/frontmatter.md',
          '/reference/components.md',
          '/reference/plugin-api.md',
          '/reference/theme-api.md',
          '/reference/client-api.md',
          '/reference/node-api.md',
        ],
      },
      {
        text: '中级',
        children: [
          '/reference/bundler/vite.md',
          '/reference/bundler/webpack.md',
        ],
      },
      {
        text: '高级',
        children: [
          '/reference/default-theme/config.md',
          '/reference/default-theme/frontmatter.md',
          '/reference/default-theme/components.md',
          '/reference/default-theme/markdown.md',
          '/reference/default-theme/styles.md',
          '/reference/default-theme/extending.md',
        ],
      },
    ],
  },
  {
    text: '单词',
    children: [
      {
        text: '名词',
        children: [
          '/reference/plugin/back-to-top.md',
          '/reference/plugin/container.md',
          '/reference/plugin/external-link-icon.md',
          '/reference/plugin/google-analytics.md',
          '/reference/plugin/medium-zoom.md',
          '/reference/plugin/nprogress.md',
          '/reference/plugin/register-components.md',
        ],
      },
      {
        text: '动词',
        children: [
          '/reference/plugin/docsearch.md',
          '/reference/plugin/search.md',
        ],
      },
      {
        text: '形容词',
        children: [
          '/reference/plugin/pwa.md',
          '/reference/plugin/pwa-popup.md',
        ],
      },
      {
        text: '代词',
        children: [
          '/reference/plugin/prismjs.md',
          '/reference/plugin/shiki.md',
        ],
      },
      {
        text: 'Theme Development',
        children: [
          '/reference/plugin/active-header-links.md',
          '/reference/plugin/git.md',
          '/reference/plugin/palette.md',
          '/reference/plugin/theme-data.md',
          '/reference/plugin/toc.md',
        ],
      },
    ],
  },
  {
    text: '文章',
    children: [
      {
        text: 'Advanced',
        children: [
          '/advanced/architecture.md',
          '/advanced/plugin.md',
          '/advanced/theme.md',
          {
            text: 'Cookbook',
            link: '/advanced/cookbook/',
          },
        ],
      },
      {
        text: 'Resources',
        children: [
          '/contributing.md',
          {
            text: 'Awesome VuePress',
            link: 'https://github.com/vuepress/awesome-vuepress',
          },
        ],
      },
    ],
  },
]
