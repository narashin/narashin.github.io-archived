(window.webpackJsonp=window.webpackJsonp||[]).push([[50],{533:function(t,a,e){"use strict";e.r(a);var s=e(25),l=Object(s.a)({},(function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"aws-ec2-서버-접속-오류시-확인사항"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#aws-ec2-서버-접속-오류시-확인사항"}},[t._v("#")]),t._v(" AWS EC2 서버 접속 오류시 확인사항")]),t._v(" "),e("ol",[e("li",[t._v("인스턴스 정보")]),t._v(" "),e("li",[t._v("사용 포트")]),t._v(" "),e("li",[t._v("ELB를 사용중이라면 ELB 정보, 대상그룹 이름")]),t._v(" "),e("li",[t._v("연결 확인 방법 (어떤 URL을 어떻게 확인했는지)")])]),t._v(" "),e("hr"),t._v(" "),e("ul",[e("li",[t._v("해당 서버 들어가서 "),e("code",[t._v("curl http://localhost")]),t._v(" 해서 정상적으로 출력되는지?")]),t._v(" "),e("li",[t._v("해당 서버에서 "),e("code",[t._v("sudo netstat -anlp")]),t._v(" 를 통해 어떤 프로세스들이 어떤 리스너를 통해 통신하고 있는지 확인")])]),t._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[t._v("sudo")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("netstat")]),t._v(" -anlp\n")])])]),e("ul",[e("li",[t._v("ext-elb → ext-elb-target → int-elb → int-elb-target 까지 꼼꼼하게 다 확인")])])])}),[],!1,null,null,null);a.default=l.exports}}]);