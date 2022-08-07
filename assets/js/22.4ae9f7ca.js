(window.webpackJsonp=window.webpackJsonp||[]).push([[22],{474:function(t,a,v){t.exports=v.p+"assets/img/os1.0ffee9bd.png"},475:function(t,a,v){t.exports=v.p+"assets/img/os2.0d35d6c2.png"},476:function(t,a,v){t.exports=v.p+"assets/img/os3.642244dc.png"},532:function(t,a,v){"use strict";v.r(a);var r=v(25),_=Object(r.a)({},(function(){var t=this,a=t.$createElement,r=t._self._c||a;return r("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[r("p"),r("div",{staticClass:"table-of-contents"},[r("ul",[r("li",[r("a",{attrs:{href:"#응용프로그램-운영체제-컴퓨터-하드웨어-시스템-리소스-관계"}},[t._v("응용프로그램, 운영체제, 컴퓨터 하드웨어(시스템 리소스) 관계")])]),r("li",[r("a",{attrs:{href:"#사용자-응용-프로그램-운영체제-컴퓨터-하드웨어와-관계"}},[t._v("사용자, 응용 프로그램, 운영체제, 컴퓨터 하드웨어와 관계")]),r("ul",[r("li",[r("a",{attrs:{href:"#운영체제는-사용자-인터페이스-제공"}},[t._v("운영체제는 사용자 인터페이스 제공")])]),r("li",[r("a",{attrs:{href:"#운영체제는-응용프로그램을-위해서도-인터페이스를-제공"}},[t._v("운영체제는 응용프로그램을 위해서도 인터페이스를 제공")])])])]),r("li",[r("a",{attrs:{href:"#운영체제를-만든다면"}},[t._v("운영체제를 만든다면?")])]),r("li",[r("a",{attrs:{href:"#운영체제와-시스템콜"}},[t._v("운영체제와 시스템콜")]),r("ul",[r("li",[r("a",{attrs:{href:"#cpu-protection-rings"}},[t._v("CPU Protection Rings")])])])]),r("li",[r("a",{attrs:{href:"#시스템콜은-커널-모드로-실행"}},[t._v("시스템콜은 커널 모드로 실행")])]),r("li",[r("a",{attrs:{href:"#사용자-모드와-커널-모드"}},[t._v("사용자 모드와 커널 모드")])])])]),r("p"),t._v(" "),r("h1",{attrs:{id:"운영체제-구조-시스템콜"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#운영체제-구조-시스템콜"}},[t._v("#")]),t._v(" 운영체제 구조 - 시스템콜")]),t._v(" "),r("h2",{attrs:{id:"응용프로그램-운영체제-컴퓨터-하드웨어-시스템-리소스-관계"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#응용프로그램-운영체제-컴퓨터-하드웨어-시스템-리소스-관계"}},[t._v("#")]),t._v(" 응용프로그램, 운영체제, 컴퓨터 하드웨어(시스템 리소스) 관계")]),t._v(" "),r("p",[t._v("도서관으로 비유 하자면,")]),t._v(" "),r("ul",[r("li",[t._v("운영체제는 도서관")]),t._v(" "),r("li",[t._v("응용 프로그램은 시민")]),t._v(" "),r("li",[t._v("컴퓨터 하드웨어는 책")]),t._v(" "),r("li",[t._v("운영체제의 역할\n"),r("ul",[r("li",[t._v("시민은 도서관에 원하는 책(자원)을 요청함")]),t._v(" "),r("li",[t._v("도서관은 적절한 책(자원)을 찾아서, 시민에게 빌려줍니다")]),t._v(" "),r("li",[t._v("기한이 다 되면, 도서관이 해당 책(자원) 회수함")])])])]),t._v(" "),r("h2",{attrs:{id:"사용자-응용-프로그램-운영체제-컴퓨터-하드웨어와-관계"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#사용자-응용-프로그램-운영체제-컴퓨터-하드웨어와-관계"}},[t._v("#")]),t._v(" 사용자, 응용 프로그램, 운영체제, 컴퓨터 하드웨어와 관계")]),t._v(" "),r("p",[r("img",{attrs:{src:v(474),alt:""}})]),t._v(" "),r("h3",{attrs:{id:"운영체제는-사용자-인터페이스-제공"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#운영체제는-사용자-인터페이스-제공"}},[t._v("#")]),t._v(" 운영체제는 사용자 인터페이스 제공")]),t._v(" "),r("p",[r("img",{attrs:{src:v(475),alt:""}})]),t._v(" "),r("ul",[r("li",[t._v("쉘 (Shell)\n"),r("ul",[r("li",[t._v("사용자가 운영체제 기능과 서비스를 조작할 수 있도록 인터페이스를 제공하는 프로그램")]),t._v(" "),r("li",[t._v("쉘은 터미널 환경(CLI)과, GUI 환경 두 종류로 분류")])])])]),t._v(" "),r("h3",{attrs:{id:"운영체제는-응용프로그램을-위해서도-인터페이스를-제공"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#운영체제는-응용프로그램을-위해서도-인터페이스를-제공"}},[t._v("#")]),t._v(" 운영체제는 응용프로그램을 위해서도 인터페이스를 제공")]),t._v(" "),r("ul",[r("li",[t._v("API (Application Programming Interface)\n"),r("ul",[r("li",[t._v("함수로 제공")]),t._v(" "),r("li",[t._v("open()")])])]),t._v(" "),r("li",[t._v("보통은 라이브러리(library) 형태로 제공\n"),r("ul",[r("li",[t._v("C library")]),t._v(" "),r("li",[t._v("ex) glibc")])])])]),t._v(" "),r("h4",{attrs:{id:"시스템-콜"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#시스템-콜"}},[t._v("#")]),t._v(" 시스템 콜")]),t._v(" "),r("ul",[r("li",[t._v("시스템 콜 또는 시스템 호출 인터페이스")]),t._v(" "),r("li",[t._v("운영체제가 운영체제 각 기능을 사용할 수 있도록 시스템 콜이라는 명령 또는 함수를 제공")]),t._v(" "),r("li",[t._v("API 내부에는 시스템콜을 호출하는 형태로 만들어지는 경우가 대부분")])]),t._v(" "),r("p",[r("img",{attrs:{src:v(476),alt:""}})]),t._v(" "),r("h2",{attrs:{id:"운영체제를-만든다면"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#운영체제를-만든다면"}},[t._v("#")]),t._v(" 운영체제를 만든다면?")]),t._v(" "),r("ol",[r("li",[t._v("운영체제를 개발한다.(kernel)")]),t._v(" "),r("li",[t._v("시스템 콜을 개발한다.")]),t._v(" "),r("li",[t._v("C(또는 사용 언어) API(library) 개발")]),t._v(" "),r("li",[t._v("Shell 프로그램 개발")]),t._v(" "),r("li",[t._v("응용 프로그램 개발")])]),t._v(" "),r("h2",{attrs:{id:"운영체제와-시스템콜"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#운영체제와-시스템콜"}},[t._v("#")]),t._v(" 운영체제와 시스템콜")]),t._v(" "),r("ul",[r("li",[t._v("표준적인 시스템콜 정의 예\n"),r("ul",[r("li",[t._v("POSIX API : UNIX 계열의 운영체제는 대부분 이를 따르고 있음")]),t._v(" "),r("li",[t._v("윈도우 API")])])])]),t._v(" "),r("blockquote",[r("p",[t._v("API : 각 언어별 운영체제 기능 호출 인터페이스 함수\n시스템콜: 운영체제 기능을 호출하는 함수")])]),t._v(" "),r("h3",{attrs:{id:"cpu-protection-rings"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#cpu-protection-rings"}},[t._v("#")]),t._v(" CPU Protection Rings")]),t._v(" "),r("ul",[r("li",[t._v("CPU도 권한 모드라는 것을 가지고 있다.\n"),r("ul",[r("li",[t._v("사용자 모드 (user mode by Applications) : 응용 프로그램이 사용. LV3")]),t._v(" "),r("li",[t._v("커널 모드 (kernel mode by OS) : 특권 명령어 실행과 원하는 작업 수행을 위한 자원 접근을 가능케 하는 모드. OS가 사용. LV0")])])])]),t._v(" "),r("p",[r("img",{attrs:{src:"https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Priv_rings.svg/1200px-Priv_rings.svg.png",alt:""}})]),t._v(" "),r("blockquote",[r("p",[t._v("커널이란? - 핵심, OS 핵심 소프트웨어\n쉘이란? - 껍데기")])]),t._v(" "),r("h2",{attrs:{id:"시스템콜은-커널-모드로-실행"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#시스템콜은-커널-모드로-실행"}},[t._v("#")]),t._v(" 시스템콜은 커널 모드로 실행")]),t._v(" "),r("ul",[r("li",[t._v("커널 모드에서만 실행 가능한 기능들이 있음.")]),t._v(" "),r("li",[t._v("커널 모드로 실행하려면, 반드시 시스템 콜을 사용해야함(거쳐야 함)")]),t._v(" "),r("li",[t._v("시스템 콜은 운영체제 제공")])]),t._v(" "),r("h2",{attrs:{id:"사용자-모드와-커널-모드"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#사용자-모드와-커널-모드"}},[t._v("#")]),t._v(" 사용자 모드와 커널 모드")]),t._v(" "),r("ul",[r("li",[t._v("함부로 응용 프로그램이 전체 컴퓨터 시스템을 해치지 못함")]),t._v(" "),r("li",[t._v("주민등록등본은 꼭 동사무소 또는 민원24시 에서 특별한 신청서를 써야만, 발급 할 수 있는 것과 동일한 원리 : 사용자모드\n"),r("ul",[r("li",[t._v("동사무소 직원은 특별한 권한을 가지고, 주민등록등본 출력 명령을 실행 : 커널모드")])])])])])}),[],!1,null,null,null);a.default=_.exports}}]);