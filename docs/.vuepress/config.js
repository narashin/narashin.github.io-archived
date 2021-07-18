const path = require('path');
let { getArticles }  = require(path.resolve('docs/.vuepress/sidebar'))

module.exports = {
  title: 'Today Nara Learned',
  description: '또 하나 배워갑니다.',
  head: [
    ['link', { rel: 'icon', href: '/logo.jpg' }]
  ],
  themeConfig: {
      sidebar: [
        {
            title: 'Today Nara Learned',
            collapsable: true,
            children: getArticles('vuejs/vuepress')
        }
    ],
      nav: [
      { text: 'Home', link: '/' },
      { text: 'About', link: '/about/' },
      {
        text: 'TIL',
        link: '/til/',
      },
      {
        text: 'Note',
        ariaLabel: 'Note',
        items: [
          { text: 'OS', link: '/note/os/' },
          { text: 'Network', link: '/note/network/' },
        ]
      },
      {
        text: 'Craft',
        ariaLabel: 'Code craft',
        items: [
          { text: 'Panopticon', link: '/craft/panopticon/' },
          { text: 'Library', link: '/craft/library/' },
        ]
      }
    ]
  },
  plugins: [['@vuepress/back-to-top'], 
      ['@vuepress/plugin-active-header-links'],
      [
        '@vuepress/google-analytics',
        {
          'ga': '250310529'
        }
      ]
  ],
  configureWebpack: {
    resolve: {
      alias: {
        '@img': path.join(__dirname, '../img')
      }
    }
  }
}
