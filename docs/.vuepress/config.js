const moment = require('moment');

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
      }
    ]
  },
  plugins: [['@vuepress/back-to-top'], 
      ['@vuepress/plugin-active-header-links'], 
      ['@vuepress/last-updated',
      {
        transformer: (timestamp, lang) => {
          const moment = require('moment')
          moment.locale(lang)
          return moment(timestamp).format("YYYY/M/D h:m:s A")
        }
      }]
  ]
}
