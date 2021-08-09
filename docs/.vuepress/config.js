const path = require('path');
var getChildren = require('./childscript');

module.exports = {
  title: 'Today Nara Learned',
  description: '또 하나 배워갑니다.',
  head: [['link', { rel: 'icon', href: '/logo.jpg' }]],
  themeConfig: {
    sidebar: {
      '/til/boj/': [
        {
          title: 'BOJ',
          children: getChildren('./docs/til/boj/'),
        },
      ],
      '/til/aws/': [
        {
          title: 'AWS',
          children: getChildren('./docs/til/aws/'),
        },
      ],
      '/til/cs/': [
        {
          title: 'Computer Science',
          children: getChildren('./docs/til/cs/'),
        },
      ],
    },
    nav: [
      { text: 'Home', link: '/' },
      { text: 'About', link: '/about/' },
      {
        text: 'TIL',
        ariaLabel: 'TIL',
        items: [
          { text: 'AWS', link: '/til/aws/' },
          { text: 'BOJ', link: '/til/boj/' },
          { text: 'Computer Science', link: '/til/cs/' },
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
