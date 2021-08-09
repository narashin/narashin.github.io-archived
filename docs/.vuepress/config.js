const path = require('path');
var getChildren = require('./childscript');

module.exports = {
  title: 'Today Nara Learned',
  description: '또 하나 배워갑니다.',
  head: [['link', { rel: 'icon', href: '/logo.jpg' }]],
  themeConfig: {
    sidebar: {
      // '/note/boj/': [
      //   {
      //     title: 'BOJ',
      //     children: getChildren('./docs/note/boj/'),
      //   },
      // ],
      // '/note/aws/': [
      //   {
      //     title: 'AWS',
      //     children: getChildren('./docs/note/aws/'),
      //   },
      // ],
    },
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
