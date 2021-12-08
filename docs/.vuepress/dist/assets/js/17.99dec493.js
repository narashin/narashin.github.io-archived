(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{377:function(t,s,a){t.exports=a.p+"assets/img/ssm-watcher_4.21.16.3e0ca133.png"},378:function(t,s,a){t.exports=a.p+"assets/img/ssm-watcher_1.15.08.44011bf9.png"},379:function(t,s,a){t.exports=a.p+"assets/img/screenshot.3e0ca133.png"},505:function(t,s,a){"use strict";a.r(s);var e=a(25),r=Object(e.a)({},(function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"frontmatter-title"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#frontmatter-title"}},[t._v("#")]),t._v(" "+t._s(t.$frontmatter.title))]),t._v(" "),e("div",{staticClass:"custom-block tip"},[e("p",{staticClass:"custom-block-title"},[t._v("목표")]),t._v(" "),e("p",[t._v(t._s(t.$frontmatter.description))])]),t._v(" "),e("p",[e("img",{attrs:{src:a(377),alt:"~@img/ssm-watcher/ssm-watcher_4.21.16.png"}})]),t._v(" "),e("h1",{attrs:{id:"_0-목적"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_0-목적"}},[t._v("#")]),t._v(" 0. 목적")]),t._v(" "),e("p",[t._v("AWS Session Manager를 통해 접근하는 인스턴스(접근 대상)와 접근 주체, 접근 시간, 접근 장소(Source IP)를 알려준다.")]),t._v(" "),e("h1",{attrs:{id:"_1-setting-yml"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_1-setting-yml"}},[t._v("#")]),t._v(" 1. "),e("code",[t._v("setting.yml")])]),t._v(" "),e("div",{staticClass:"language-json extra-class"},[e("pre",{pre:!0,attrs:{class:"language-json"}},[e("code",[t._v("SLACK_WEBHOOK_URL"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('""')]),t._v(" #SLACK WEBHOOK URL\nREGION"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" ap-northeast"),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("-2")]),t._v(" #Target Region\n")])])]),e("h1",{attrs:{id:"_2-그외"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_2-그외"}},[t._v("#")]),t._v(" 2. 그외")]),t._v(" "),e("p",[t._v("SSM Watcher는 Serverless Framework를 이용하여 만들어졌으며 기본적으로 Serverless Framework가 설치되어 있는 환경에서 deploy 가능합니다.")]),t._v(" "),e("blockquote",[e("p",[e("a",{attrs:{href:"https://www.serverless.com/",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://www.serverless.com/"),e("OutboundLink")],1)])]),t._v(" "),e("hr"),t._v(" "),e("div",{staticClass:"custom-block tip"},[e("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),e("p",[t._v("설치를 하고 싶다면")])]),t._v(" "),e("h1",{attrs:{id:"ssm-watcher-사용방법"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#ssm-watcher-사용방법"}},[t._v("#")]),t._v(" SSM-Watcher 사용방법")]),t._v(" "),e("ol",[e("li",[t._v("serverless framework 설치")])]),t._v(" "),e("p",[e("a",{attrs:{href:"https://www.serverless.com/framework/docs/getting-started/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Serverless Getting Started Guide"),e("OutboundLink")],1)]),t._v(" "),e("ol",{attrs:{start:"2"}},[e("li",[t._v("본 프로그램을 돌릴 로컬환경에서 AWS Config/Credential 설정(세션")])]),t._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[t._v("$ ~/.aws/credential\n")])])]),e("ul",[e("li",[e("code",[t._v("credentials")]),t._v(" 에서 Access key와 Secret Access key 설정")])]),t._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[t._v("$ ~/.aws/config\n")])])]),e("ul",[e("li",[e("code",[t._v("config")]),t._v(" 에서 region, profile 설정")])]),t._v(" "),e("ol",{attrs:{start:"3"}},[e("li",[e("code",[t._v("git clone")])])]),t._v(" "),e("p",[e("a",{attrs:{href:"https://github.com/narashin/ssm-watcher",target:"_blank",rel:"noopener noreferrer"}},[t._v("GitHub - narashin/ssm-watcher: Tool to detect when your session is activated."),e("OutboundLink")],1)]),t._v(" "),e("ol",{attrs:{start:"4"}},[e("li",[t._v("clone한 폴더 내에서 "),e("code",[t._v("npm i")]),t._v(" 로 패키지 설치")])]),t._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[t._v("$ "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("npm")]),t._v(" i\n")])])]),e("ol",{attrs:{start:"5"}},[e("li",[e("code",[t._v("setting.yml")]),t._v(" 수정")])]),t._v(" "),e("div",{staticClass:"language-yaml extra-class"},[e("pre",{pre:!0,attrs:{class:"language-yaml"}},[e("code",[e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("SLACK_WEBHOOK_URL")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("''")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#SLACK WEBHOOK URL")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("REGION")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" ap"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("northeast"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Target Region")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("PROFILE")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" default "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 사용할 AWS Profile (2에서 설정)")]),t._v("\n")])])]),e("ul",[e("li",[t._v("SLACK_WEBHOOK_URL : 알림을 받을 Slack Webhook URL 설정")]),t._v(" "),e("li",[t._v("REGION : 사용할 Region 설정")]),t._v(" "),e("li",[t._v("PROFILE : 사용할 AWS Profile 설정")])]),t._v(" "),e("ol",{attrs:{start:"6"}},[e("li",[e("code",[t._v("sls deploy")]),t._v(" 로 배포")])]),t._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[t._v("$ sls deploy\n")])])]),e("p",[e("img",{attrs:{src:a(378),alt:"~@img/ssm-watcher/ssm-watcher_1.15.08.png"}})]),t._v(" "),e("ol",{attrs:{start:"7"}},[e("li",[t._v("세션 매니저를 통해 세션이 시작되면,")])]),t._v(" "),e("p",[e("img",{attrs:{src:a(379),alt:"~@img/ssm-watcher/screenshot.png"}})]),t._v(" "),e("p",[t._v("위와 같은 알림 발송")])])}),[],!1,null,null,null);s.default=r.exports}}]);