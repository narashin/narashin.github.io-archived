const path = require('path');
// let { getArticles } = require(path.resolve('docs/.vuepress/sidebar'));

module.exports = {
  title: 'Today Nara Learned',
  description: '또 하나 배워갑니다.',
  head: [['link', { rel: 'icon', href: '/logo.jpg' }]],
  themeConfig: {
    sidebar: [
      {
        title: 'AWS', // required
        path: '/note/aws/', // optional, link of the title, which should be an absolute path and must exist
        collapsable: true, // optional, defaults to true
        sidebarDepth: 1, // optional, defaults to 1
        children: ['/'],
      },
      {
        title: 'BOJ', // required
        path: '/note/boj/', // optional, link of the title, which should be an absolute path and must exist
        collapsable: false, // optional, defaults to true
        sidebarDepth: 1, // optional, defaults to 1
        children: ['/note/boj/io.md', '/note/boj/if.md'],
      },
    ],
    nav: [
      { text: 'Home', link: '/' },
      { text: 'About', link: '/about/' },
      {
        text: 'Note',
        ariaLabel: 'Note',
        items: [
          { text: 'AWS', link: '/note/aws/' },
          { text: 'Computer Science', link: '/note/cs/' },
          { text: 'BOJ', link: '/note/boj/' },
        ],
      },
      {
        text: 'Craft',
        ariaLabel: 'Code craft',
        items: [
          { text: 'Panopticon', link: '/craft/panopticon/' },
          { text: 'Cheakbbang', link: '/craft/cheakbbang/' },
        ],
      },
    ],
  },
  plugins: [
    ['@vuepress/back-to-top'],
    ['@vuepress/plugin-active-header-links'],
    [
      '@vuepress/google-analytics',
      {
        ga: '250310529',
      },
    ],
  ],
  configureWebpack: {
    resolve: {
      alias: {
        '@img': path.join(__dirname, '../img'),
      },
    },
  },
};
