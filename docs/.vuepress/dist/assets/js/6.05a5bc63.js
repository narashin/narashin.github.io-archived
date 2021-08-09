(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{409:function(t,o,n){t.exports=n.p+"assets/img/traffic.3dbe3059.png"},410:function(t,o,n){t.exports=n.p+"assets/img/cloudfront-only-not-alb_3.16.33.30e28878.png"},411:function(t,o,n){t.exports=n.p+"assets/img/cloudfront-only-not-alb_3.18.37.592d9878.png"},412:function(t,o,n){t.exports=n.p+"assets/img/cloudfront-only-not-alb_3.28.29.3e04a961.png"},413:function(t,o,n){t.exports=n.p+"assets/img/cloudfront-only-not-alb_3.32.52.5d4a022c.png"},414:function(t,o,n){t.exports=n.p+"assets/img/cloudfront-only-not-alb_3.38.01.9f448c66.png"},415:function(t,o,n){t.exports=n.p+"assets/img/cloudfront-only-not-alb_3.40.27.fcebbcb6.png"},416:function(t,o,n){t.exports=n.p+"assets/img/cloudfront-only-not-alb_3.40.40.3a8b1fd5.png"},489:function(t,o,n){"use strict";n.r(o);var l=n(25),r=Object(l.a)({},(function(){var t=this,o=t.$createElement,l=t._self._c||o;return l("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[l("h1",{attrs:{id:"cloudfront를-통하지-않고-alb로-직접-들어오는-트래픽을-제한하고-싶다"}},[l("a",{staticClass:"header-anchor",attrs:{href:"#cloudfront를-통하지-않고-alb로-직접-들어오는-트래픽을-제한하고-싶다"}},[t._v("#")]),t._v(" CloudFront를 통하지 않고 ALB로 직접 들어오는 트래픽을 제한하고 싶다")]),t._v(" "),l("h2",{attrs:{id:"문제상황"}},[l("a",{staticClass:"header-anchor",attrs:{href:"#문제상황"}},[t._v("#")]),t._v(" 문제상황")]),t._v(" "),l("p",[l("img",{attrs:{src:n(409),alt:"~@img/cloudfront-only-not-alb/traffic.png"}})]),t._v(" "),l("ol",[l("li",[t._v("의도한 트래픽은 CloudFront를 통해 ALB로 접속하는 구조이다.")]),t._v(" "),l("li",[t._v("그러나 2번과 같이 의도하지 않은 트래픽이 직접 ALB로 접속할 때 이를 방지하려면 어떻게 해야할까?\n"),l("ul",[l("li",[t._v("CF를 통하지 않을 경우 트래픽 제한 룰셋(Geo Restriction 등)을 정해도 이를 무시하고 접속하는 경우가 발생할 수 있으며, 공격에 취약해진다.")])])])]),t._v(" "),l("h2",{attrs:{id:"해결책"}},[l("a",{staticClass:"header-anchor",attrs:{href:"#해결책"}},[t._v("#")]),t._v(" 해결책")]),t._v(" "),l("p",[t._v("이런 경우, CloudFront에서 Origin Custom Header 를 설정하여 해당 Header 값과 일치하는 상황일 경우에만 ALB에서 타겟으로 전달하게 리스너를 설정해주면 CF에서 들어가는 트래픽만이 ALB에 연결된 타겟으로 연결된다.")]),t._v(" "),l("h2",{attrs:{id:"실습"}},[l("a",{staticClass:"header-anchor",attrs:{href:"#실습"}},[t._v("#")]),t._v(" 실습")]),t._v(" "),l("h3",{attrs:{id:"cloudfront-설정"}},[l("a",{staticClass:"header-anchor",attrs:{href:"#cloudfront-설정"}},[t._v("#")]),t._v(" CloudFront 설정")]),t._v(" "),l("p",[l("img",{attrs:{src:n(410),alt:"~@img/cloudfront-only-not-alb/cloudfront-only-not-alb_3.16.33.png"}})]),t._v(" "),l("ul",[l("li",[t._v("CloudFront Distribution → Origins and Origin Groups에서 설정을 원하는 Origin을 선택하여 "),l("strong",[t._v("Edit")]),t._v(" 클릭")])]),t._v(" "),l("p",[l("img",{attrs:{src:n(411),alt:"~@img/cloudfront-only-not-alb/cloudfront-only-not-alb_3.18.37.png"}})]),t._v(" "),l("ul",[l("li",[t._v("하단에 "),l("code",[t._v("Origin Custom Headers")]),t._v(" 에 Custom Header Name과 Value 값을 임의로 설정한다.")])]),t._v(" "),l("h3",{attrs:{id:"elb-설정"}},[l("a",{staticClass:"header-anchor",attrs:{href:"#elb-설정"}},[t._v("#")]),t._v(" ELB 설정")]),t._v(" "),l("p",[l("img",{attrs:{src:n(412),alt:"~@img/cloudfront-only-not-alb/cloudfront-only-not-alb_3.28.29.png"}})]),t._v(" "),l("ul",[l("li",[t._v("CloudFront에 연결된 Origin ALB를 선택하여 리스너 탭에서 "),l("strong",[t._v("규칙 보기/편집")]),t._v(" 클릭")])]),t._v(" "),l("p",[l("img",{attrs:{src:n(413),alt:"~@img/cloudfront-only-not-alb/cloudfront-only-not-alb_3.32.52.png"}})]),t._v(" "),l("ul",[l("li",[t._v("상단의 탭에서 규칙을 추가(+ 버튼)하여 규칙을 추가한다.\n"),l("ul",[l("li",[l("strong",[t._v("IF")]),t._v(" "),l("code",[t._v("HTTP 헤더")]),t._v(" 가 "),l("code",[t._v("X-CUSTOM-HEADER")]),t._v(" / "),l("code",[t._v("rkskekfk")]),t._v(" (CloudFront 에서 Origin Custom Header 로 설정한 값)")]),t._v(" "),l("li",[l("strong",[t._v("THEN")]),t._v(" 전달 "),l("code",[t._v("타겟")]),t._v(" 설정")])])])]),t._v(" "),l("p",[l("img",{attrs:{src:n(414),alt:"~@img/cloudfront-only-not-alb/cloudfront-only-not-alb_3.38.01.png"}})]),t._v(" "),l("ul",[l("li",[t._v("기본적으로 존재하는 규칙은 삭제할 수 없다.")]),t._v(" "),l("li",[l("strong",[t._v("THEN")]),t._v(" 으로 그 외의 요청은 다 "),l("code",[t._v("403")]),t._v(" 으로 보내게 설정해두었다.")])]),t._v(" "),l("h3",{attrs:{id:"확인"}},[l("a",{staticClass:"header-anchor",attrs:{href:"#확인"}},[t._v("#")]),t._v(" 확인")]),t._v(" "),l("p",[t._v("위의 설정 후 다시 CloudFront 접속 / ALB 직접 접속 한 결과")]),t._v(" "),l("p",[l("img",{attrs:{src:n(415),alt:"~@img/cloudfront-only-not-alb/cloudfront-only-not-alb_3.40.27.png"}})]),t._v(" "),l("ul",[l("li",[t._v("CloudFront 로 접속")])]),t._v(" "),l("p",[l("img",{attrs:{src:n(416),alt:"~@img/cloudfront-only-not-alb/cloudfront-only-not-alb_3.40.40.png"}})]),t._v(" "),l("ul",[l("li",[t._v("ALB로 직접 접속\n"),l("ul",[l("li",[t._v("403 반환")])])])])])}),[],!1,null,null,null);o.default=r.exports}}]);