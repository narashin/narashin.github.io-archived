const moment = require('moment');
const path = require('path');

module.exports = {
  title: 'Today Nara Learned',
  description: 'TIL pages',
  head: [
    ['link', { rel: 'icon', href: '/logo.jpg' }]
  ],
  themeConfig: {
      nav: [
      { text: 'Home', link: '/' },
      { text: 'About', link: '/about/' },
      {
        text: 'Code',
        ariaLabel: 'code',
        items: [
          { text: 'Javascript', link: '/code/javascript/' },
        ]
      },
      {
        text: 'Challenge',
        ariaLabel: 'challenge',
        items: [
          { text: 'nodebird', link: '/challenge/nodebird/' },
        ]
      },
      {
        text: 'Craft',
        ariaLabel: 'challenge',
        items: [
          { text: 'Panopticon', link: '/craft/panopticon/' },
          { text: 'Price-checker', link: '/craft/pricechecker/' }
        ]
      }
    ]
  },
  plugins: [['@vuepress/back-to-top'], 
      ['@vuepress/plugin-active-header-links']
  ],
  configureWebpack: {
    resolve: {
      alias: {
        '@img': path.join(__dirname, '../img/')
      }
    }
  }
}
