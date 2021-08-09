(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{359:function(t,a,s){t.exports=s.p+"assets/img/pricechecker-architecture.10e6eda9.png"},360:function(t,a,s){t.exports=s.p+"assets/img/_2020-10-10__8.38.30.3a5535f4.png"},361:function(t,a,s){t.exports=s.p+"assets/img/_2020-10-11__5.59.52.ab790bfe.png"},362:function(t,a,s){t.exports=s.p+"assets/img/_2020-10-12__10.51.31.61b374e4.png"},363:function(t,a,s){t.exports=s.p+"assets/img/_2020-10-12__10.34.21.07ae8d74.png"},364:function(t,a,s){t.exports=s.p+"assets/img/_2020-10-12__10.51.55.f2d43bc2.png"},491:function(t,a,s){"use strict";s.r(a);var n=s(25),e=Object(n.a)({},(function(){var t=this,a=t.$createElement,n=t._self._c||a;return n("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[n("h1",{attrs:{id:"aws-pricechecker-serverless-architecture"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#aws-pricechecker-serverless-architecture"}},[t._v("#")]),t._v(" AWS Pricechecker - Serverless Architecture")]),t._v(" "),n("div",{staticClass:"custom-block tip"},[n("p",{staticClass:"custom-block-title"},[t._v("코드")]),t._v(" "),n("p",[t._v("코드는 회사 빌링 정보가 포함되어 있어 공개가 불가하다. 아쉽지만 아키텍처만 설명하겠다.")])]),t._v(" "),n("h2",{attrs:{id:"_0-시나리오"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_0-시나리오"}},[t._v("#")]),t._v(" 0. 시나리오")]),t._v(" "),n("p",[n("img",{attrs:{src:s(359),alt:"~@img/aws-pricechecker/pricechecker-architecture.png"}})]),t._v(" "),n("ul",[n("li",[t._v("AWS Pricelist API가 업데이트 되면 이를 자동으로 감지하여, 원하는 방식으로 데이터를 처리한 뒤 Google Spreadsheet 에 넣고 싶다. 이 작업이 완료 되면 Slack으로 업데이트를 알리는 메시지를 보내고 싶다.")])]),t._v(" "),n("p",[t._v("(1) Pricelist API 업데이트를 SNS로 받는다.")]),t._v(" "),n("p",[t._v("(2) SNS는 Fargate task를 돌릴 수 있는 Lambda를 트리거 한다.")]),t._v(" "),n("p",[t._v("(3) Lambda는 Fargate task를 돌리고, Container의 작업이 완료 되면 Fargate는 Stopped 된다.")]),t._v(" "),n("p",[t._v("(3-1) Google Spreadsheet 에 데이터가 들어간다.")]),t._v(" "),n("p",[t._v("(3-2) Container 작업 완료로 Stopped된 상황을 Cloudwatch Event로 캐치한다.")]),t._v(" "),n("p",[t._v("(4) (3-2)를 통해 캐치한 상황로 Lambda를 트리거 한다.")]),t._v(" "),n("p",[t._v("(4-1) Lambda는 업데이트 상황을 Slack으로 알려준다.")]),t._v(" "),n("h2",{attrs:{id:"_1-pricelist-api-의-변경을-sns으로-받아보기"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_1-pricelist-api-의-변경을-sns으로-받아보기"}},[t._v("#")]),t._v(" 1. Pricelist API 의 변경을 SNS으로 받아보기")]),t._v(" "),n("p",[n("a",{attrs:{href:"https://docs.aws.amazon.com/ko_kr/awsaccountbilling/latest/aboutv2/price-changes.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("AWS Price List API 사용"),n("OutboundLink")],1)]),t._v(" "),n("p",[t._v("AWS는 각종 서비스 및 리소스의 가격을 Price List API로 제공한다.")]),t._v(" "),n("p",[t._v("이를 SNS으로 구독하면 (1) 변경 될 때 또는 (2) 하루에 한 번 PriceList API를 받아볼 수 있다.")]),t._v(" "),n("p",[n("img",{attrs:{src:s(360),alt:"~@img/aws-pricechecker/_2020-10-10__8.38.30.png"}})]),t._v(" "),n("ul",[n("li",[t._v("반드시 미국 동부(버지니아 북부)로 리전을 선택할 것 "),n("code",[t._v("{ region : us-east-1 }")])]),t._v(" "),n("li",[t._v("구독으로 기존 알림 ARN 참조하기\n"),n("ul",[n("li",[t._v("서비스 가격 변경시마다 알림 받기 "),n("code",[t._v("arn:aws:sns:us-east-1:278350005181:price-list-api")])]),t._v(" "),n("li",[t._v("하루에 한번 가격 변경에 대한 알림 받기 "),n("code",[t._v("arn:aws:sns:us-east-1:278350005181:daily-aggregated-price-list-api")])]),t._v(" "),n("li",[t._v("Savings Plans 가격 "),n("code",[t._v("arn:aws:sns:us-east-1:626627529009:SavingsPlanPublishNotifications")])])])])]),t._v(" "),n("h2",{attrs:{id:"_2-fargate-task를-실행하기"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_2-fargate-task를-실행하기"}},[t._v("#")]),t._v(" 2. Fargate task를 실행하기")]),t._v(" "),n("h3",{attrs:{id:"_1-fargate"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_1-fargate"}},[t._v("#")]),t._v(" (1) Fargate")]),t._v(" "),n("p",[n("img",{attrs:{src:s(361),alt:"~@img/aws-pricechecker/_2020-10-11__5.59.52.png"}})]),t._v(" "),n("ul",[n("li",[t._v("먼저 클러스터를 생성한다\n"),n("ul",[n("li",[t._v("클러스터 이름, VPC 새 생성 여부 등을 설정")])])]),t._v(" "),n("li",[t._v("ECR에 올린 이미지를 ECS on Fargate용 Image로 사용한다\n"),n("ul",[n("li",[t._v("Docker 이미지를 올리기 위해 Dockerfile을 미리 작성하여 ECR 에 푸시")])])]),t._v(" "),n("li",[t._v("ECS의 "),n("strong",[t._v("예약된 작업")]),t._v("의 경우 Cloudwatch Event에서 지원하는 이벤트에만(또는 Cron잡 가능) 걸 수 있으므로(SNS로 받는 구독에 대해서는 불가) Lambda로 트리거 한다")])]),t._v(" "),n("h3",{attrs:{id:"_2-lambda"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_2-lambda"}},[t._v("#")]),t._v(" (2) Lambda")]),t._v(" "),n("p",[t._v("SNS로 트리거 될 Lambda 함수로서, ECS Task를 Run 시킨다.")]),t._v(" "),n("div",{staticClass:"language-jsx extra-class"},[n("pre",{pre:!0,attrs:{class:"language-jsx"}},[n("code",[n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token constant"}},[t._v("AWS")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("require")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'aws-sdk'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\nexports"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("handler")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("async")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("event")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" ecs "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("AWS"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("ECS")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    apiVersion"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'2014-11-13'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    region"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'ap-northeast-2'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" params "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    cluster"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'클러스터명'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    launchType"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'FARGATE'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    taskDefinition"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'작업:(latest는 불가. 특정 버전 숫자를 넣어야함)'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    networkConfiguration"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      awsvpcConfiguration"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        assignPublicIp"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'ENABLED'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        subnets"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'서브넷ID'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'서브넷ID'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        securityGroups"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'보안그룹ID'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" ecs"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("runTask")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("params"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("promise")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),n("p",[n("a",{attrs:{href:"https://docs.aws.amazon.com/AmazonECS/latest/APIReference/API_RunTask.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("RunTask"),n("OutboundLink")],1)]),t._v(" "),n("p",[n("img",{attrs:{src:s(362),alt:"~@img/aws-pricechecker/_2020-10-12__10.51.31.png"}})]),t._v(" "),n("h2",{attrs:{id:"_3-cloudwatch로-작업완료를-파악하여-slack으로-알려주기"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_3-cloudwatch로-작업완료를-파악하여-slack으로-알려주기"}},[t._v("#")]),t._v(" 3. Cloudwatch로 작업완료를 파악하여 Slack으로 알려주기")]),t._v(" "),n("ul",[n("li",[t._v("Task내의 이미지가 작업을 마치고 컨테이너가 내려오면, ECS Task도 함께 Stopped 되는데 이를 캐치하기 위한 이벤트 규칙 정한다.")]),t._v(" "),n("li",[t._v("이 규칙을 통해 원하는 작업이 완료 되었음을 캐치하여, Slack 등의 알림 서비스로 알려줄 수 있다.")])]),t._v(" "),n("h3",{attrs:{id:"_1-cloudwatch-events"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_1-cloudwatch-events"}},[t._v("#")]),t._v(" (1) Cloudwatch Events")]),t._v(" "),n("p",[n("img",{attrs:{src:s(363),alt:"~@img/aws-pricechecker/_2020-10-12__10.34.21.png"}})]),t._v(" "),n("ul",[n("li",[t._v("Cloudwatch Event → 규칙 에서 이벤트 패턴을 설정한다.\n"),n("ul",[n("li",[t._v("ecs, Task State Change, STOPPED, (Essential container in task exited)")])])])]),t._v(" "),n("h3",{attrs:{id:"_2-slack"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_2-slack"}},[t._v("#")]),t._v(" (2) Slack")]),t._v(" "),n("p",[n("img",{attrs:{src:s(364),alt:"~@img/aws-pricechecker/_2020-10-12__10.51.55.png"}})]),t._v(" "),n("p",[t._v("Slack Webhook을 이용하여 작업 완료 Message를 보낸다.")])])}),[],!1,null,null,null);a.default=e.exports}}]);