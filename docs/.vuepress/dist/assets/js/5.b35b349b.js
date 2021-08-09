(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{401:function(_,t,e){_.exports=e.p+"assets/img/_2019-09-25__5.31.26.fed42efd.png"},402:function(_,t,e){_.exports=e.p+"assets/img/_2019-09-25__5.31.261.3c5a1626.png"},403:function(_,t,e){_.exports=e.p+"assets/img/_2019-09-25__5.36.13.97c08e8f.png"},404:function(_,t,e){_.exports=e.p+"assets/img/_2019-09-25__5.40.18.7846ea49.png"},405:function(_,t,e){_.exports=e.p+"assets/img/_2019-09-25__5.45.29.c9c67ef8.png"},406:function(_,t,e){_.exports=e.p+"assets/img/_2019-09-25__5.49.10.e18482b9.png"},407:function(_,t,e){_.exports=e.p+"assets/img/_2019-09-25__5.54.16.c21489c8.png"},443:function(_,t,e){"use strict";e.r(t);var s=e(25),a=Object(s.a)({},(function(){var _=this,t=_.$createElement,s=_._self._c||t;return s("ContentSlotsDistributor",{attrs:{"slot-key":_.$parent.slotKey}},[s("h1",{attrs:{id:"s3에-저장한-데이터를-일정-시간-후에-삭제하고-싶다-s3의-수명주기-lifecycle-설정하기"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#s3에-저장한-데이터를-일정-시간-후에-삭제하고-싶다-s3의-수명주기-lifecycle-설정하기"}},[_._v("#")]),_._v(" S3에 저장한 데이터를 일정 시간 후에 삭제하고 싶다 : S3의 수명주기(Lifecycle) 설정하기")]),_._v(" "),s("p",[s("img",{attrs:{src:e(401),alt:"~@img/s3-lifecycle/_2019-09-25__5.31.26.png"}})]),_._v(" "),s("ul",[s("li",[_._v("수명주기를 설정하고 싶은 S3 Bucket에 접근하여 "),s("code",[_._v("관리")]),_._v(" 탭을 클릭")])]),_._v(" "),s("p",[s("img",{attrs:{src:e(402),alt:"~@img/s3-lifecycle/_2019-09-25__5.31.26%201.png"}})]),_._v(" "),s("ul",[s("li",[s("code",[_._v("수명 주기 규칙 추가")]),_._v(" 를 클릭")])]),_._v(" "),s("h2",{attrs:{id:"_1-수명-주기-규칙-이름-및-범위"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1-수명-주기-규칙-이름-및-범위"}},[_._v("#")]),_._v(" (1) 수명 주기 규칙 : 이름 및 범위")]),_._v(" "),s("p",[s("img",{attrs:{src:e(403),alt:"~@img/s3-lifecycle/_2019-09-25__5.36.13.png"}})]),_._v(" "),s("ul",[s("li",[s("p",[s("code",[_._v("규칙 이름")]),_._v(" 을 명명")])]),_._v(" "),s("li",[s("p",[s("code",[_._v("접두사/태그에 대한 범위")]),_._v(" 에 대한 필터가 필요한 경우 지정할 수 있습니다.")]),_._v(" "),s("ul",[s("li",[s("p",[_._v("접두사(Prefix)는 Bucket내에서 사용되는 폴더와 동일")]),_._v(" "),s("p",[s("img",{attrs:{src:e(404),alt:"~@img/s3-lifecycle/_2019-09-25__5.40.18.png"}})])]),_._v(" "),s("li",[s("p",[_._v("위와 같이 설정했다면, 규칙 이름이 "),s("code",[_._v("something_gone_after_1day")]),_._v(" 가 되고, 접두사(폴더명)가 "),s("code",[_._v("something")]),_._v(" 인 객체들에만 적용.")])])])])]),_._v(" "),s("h2",{attrs:{id:"_2-수명-주기-규칙-이전"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-수명-주기-규칙-이전"}},[_._v("#")]),_._v(" (2) 수명 주기 규칙 : 이전")]),_._v(" "),s("p",[s("img",{attrs:{src:e(405),alt:"~@img/s3-lifecycle/_2019-09-25__5.45.29.png"}})]),_._v(" "),s("p",[_._v("스토리지를 기본 S3에서 Standard-IA, Intelligent-Tiering, One Zone-IA, Glacier, Glacier Deep Archive 등으로 이전하고 싶을 때 사용합니다.")]),_._v(" "),s("p",[_._v("본 요구사항에서는 필요 없는 설정이므로 아무것도 설정하지 않은 상태로 다음으로 넘어갑니다.")]),_._v(" "),s("h2",{attrs:{id:"_3-수명-주기-규칙-만료"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_3-수명-주기-규칙-만료"}},[_._v("#")]),_._v(" (3) 수명 주기 규칙 : 만료")]),_._v(" "),s("p",[s("img",{attrs:{src:e(406),alt:"~@img/s3-lifecycle/_2019-09-25__5.49.10.png"}})]),_._v(" "),s("p",[_._v("객체 생성 후 원하는 시간이 지나면 삭제할 수 있습니다.")]),_._v(" "),s("p",[_._v("객체의 버전에 따라 만료 날짜를 다르게 설정할 수 있으며 최소 단위는 1일 입니다.")]),_._v(" "),s("h2",{attrs:{id:"_4-수명-주기-규칙-검토"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_4-수명-주기-규칙-검토"}},[_._v("#")]),_._v(" (4) 수명 주기 규칙 : 검토")]),_._v(" "),s("p",[s("img",{attrs:{src:e(407),alt:"~@img/s3-lifecycle/_2019-09-25__5.54.16.png"}})]),_._v(" "),s("p",[_._v("설정 내용을 마지막으로 검토하고 "),s("code",[_._v("저장")]),_._v(" 하면 규칙이 적용됩니다.")]),_._v(" "),s("ul",[s("li",[_._v("주의\n"),s("ul",[s("li",[_._v("본 설정은 해당 Bucket의 Prefix/Tag 설정에 따라 객체의 범위가 달라질 수 있습니다만, 해당 범위 안에서는 "),s("strong",[_._v("언제 생성 된 파일이든 모두 같은 룰")]),_._v("이 적용됩니다. 따라서 위에서 적용 시킨 것처럼 1일 후 삭제 되게 설정을 해두었다면, 이미 생성된 지(업로드한 지) 1일이 지난 객체들은 삭제가 진행됩니다.")])])])])])}),[],!1,null,null,null);t.default=a.exports}}]);