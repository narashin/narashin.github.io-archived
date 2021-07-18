const moment = require('moment');
const path = require('path');
// let { getArticles }  = require(path.resolve('docs/.vuepress/sidebar'))

module.exports = {
  title: 'Today Nara Learned',
  description: 'TIL pages',
  head: [
    ['link', { rel: 'icon', href: '/logo.jpg' }]
  ],
  themeConfig: {
      sidebar: false,
      nav: [
      { text: 'Home', link: '/' },
      { text: 'About', link: '/about/' },
      {
        text: 'TIL',
        link: '/til/',
      },
      {
        text: '강의노트',
        ariaLabel: '강의노트',
        items: [
          { text: '운영체제', link: '/note/os/' },
          { text: '네트워크', link: '/note/network/' },
        ]
      },
      {
        text: 'Craft',
        ariaLabel: 'code craft',
        items: [
          { text: 'Panopticon', link: '/craft/panopticon/' },
          { text: 'Library', link: '/craft/libary/' },
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
