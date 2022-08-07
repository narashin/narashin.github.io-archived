const path = require('path');
var getChildren = require('./childscript');

module.exports = {
  title: 'Today Nara Learned',
  description: '또 하나 배워갑니다.',
  head: [['link', { rel: 'icon', href: '/logo.jpg' }],
  [
    "script",
    {
      async: true,
      src: "https://www.googletagmanager.com/gtag/js?id=G-HY9BVBRNH5",
    },
  ],
  ["script", {}, ["window.dataLayer = window.dataLayer || []; function gtag(){dataLayer.push(arguments);} gtag('js', new Date()); gtag('config', 'G-HY9BVBRNH5');"]],
],
  themeConfig: {
    sidebar: {
      '/note/': [
        {
          title: 'Note',
          children: getChildren('./docs/note/'),
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
      { text: 'Note', link: '/note/'},
      {
        text: 'TIL',
        ariaLabel: 'TIL',
        items: [
          { text: 'AWS', link: '/til/aws/' },
          // { text: 'PS', link: '/til/ps/' },
          // { text: 'Note', link: '/til/note/' },
          { text: 'CS', link: '/til/cs/' },
        ],
      },
      {
        text: 'Craft',
        ariaLabel: 'Code craft',
        items: [
          { text: 'Efish', link: '/craft/efish/' },
          { text: 'Shieldee', link: '/craft/shieldee/' },
          { text: 'Panopticon', link: '/craft/panopticon/' },
          { text: 'AWS Pricechecker', link: '/craft/aws-pricechecker/' },
          { text: 'AWS RI-Watcher', link: '/craft/ri-watcher/' },
          { text: 'AWS SSM-Watcher', link: '/craft/ssm-watcher/' },
          { text: 'Worklight', link: '/craft/worklight/' },
          { text: 'Cheakbbang', link: '/craft/cheakbbang/' },
        ],
      },
    ],
  },
  plugins: [
    ['@vuepress/back-to-top'],
    ['@vuepress/plugin-active-header-links'],
    // [
    //   '@vuepress/google-analytics',
    //   {
    //     ga: 'G-HY9BVBRNH5',
    //   },
    // ],
  ],
  configureWebpack: {
    resolve: {
      alias: {
        '@img': path.join(__dirname, '../img'),
      },
    },
  },
};
