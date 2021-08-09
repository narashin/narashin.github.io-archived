(window.webpackJsonp=window.webpackJsonp||[]).push([[40],{518:function(s,a,t){"use strict";t.r(a);var r=t(25),e=Object(r.a)({},(function(){var s=this,a=s.$createElement,t=s._self._c||a;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("div",{staticClass:"custom-block warning"},[t("p",{staticClass:"custom-block-title"},[s._v("WARNING")]),s._v(" "),t("p",[s._v("bucket 사이즈가 너무 클 경우 || 객체가 많은 경우에 스크립트가 돌아가는 데에 한참 걸릴 것으로 예상됨( . .)")])]),s._v(" "),t("h1",{attrs:{id:"계정-내-모든-s3-bucket의-사이즈와-객체-수를-구하는-스크립트"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#계정-내-모든-s3-bucket의-사이즈와-객체-수를-구하는-스크립트"}},[s._v("#")]),s._v(" 계정 내 모든 S3 Bucket의 사이즈와 객체 수를 구하는 스크립트")]),s._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token shebang important"}},[s._v("#!/bin/bash")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("aws_profile")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'awscli프로필'")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'awscli프로필2'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#loop AWS profiles")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("for")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token for-or-select variable"}},[s._v("i")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("in")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"'),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("${aws_profile"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("@"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("}")]),s._v('"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("do")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"'),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("${i}")]),s._v('"')]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("buckets")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token variable"}},[t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$(")]),s._v("aws --profile "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"'),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("${i}")]),s._v('"')]),s._v(" --region "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("사용하는리전"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" s3 "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("ls")]),s._v(" s3:// --recursive "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("awk")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'{print "),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$3")]),s._v("}'")]),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v(")")])]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#loop S3 buckets")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("for")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token for-or-select variable"}},[s._v("j")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("in")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"'),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("${buckets"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("@"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("}")]),s._v('"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("do")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"'),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("${j}")]),s._v('"')]),s._v("\n  aws --profile "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"'),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("${i}")]),s._v('"')]),s._v(" --region "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("사용하는리전"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" s3 "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("ls")]),s._v(" s3://"),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"'),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("${j}")]),s._v('"')]),s._v(" --recursive --human-readable --summarize "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("  "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("awk")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'{ array[NR]="),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$0")]),s._v(" } END { for (i=NR-1; i<=NR; i++) print array[i] }'")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("done")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("done")]),s._v("\n")])])]),t("ol",[t("li",[t("p",[s._v("AWS CLI 에 저장된 프로필을 긁고")])]),s._v(" "),t("li",[t("p",[s._v("프로필에 생성된 버킷 리스트를 긁고")])]),s._v(" "),t("li",[t("p",[s._v("해당 버킷 내의 객체의 수와 사이즈를 프린트합니다.")]),s._v(" "),t("p",[t("code",[s._v('aws --profile "${i}" --region <사용하는리전> s3 ls s3://"${j}" --recursive --human-readable --summarize | awk \'{ array[NR]=$0 } END { for (i=NR-1; i<=NR; i++) print array[i] }\'')]),s._v(" 에서 "),t("code",[s._v("awk '{ array[NR]=$0 } END { for (i=NR-1; i<=NR; i++) print array[i] }'")]),s._v(" 를 삭제하면 버킷내 모든 객체 정보까지 얻을 수 있습니다.")])])]),s._v(" "),t("p",[t("img",{attrs:{src:"%E1%84%80%E1%85%A8%E1%84%8C%E1%85%A5%E1%86%BC%20%E1%84%82%E1%85%A2%20%E1%84%86%E1%85%A9%E1%84%83%E1%85%B3%E1%86%AB%20S3%20Bucket%E1%84%8B%E1%85%B4%20%E1%84%89%E1%85%A1%E1%84%8B%E1%85%B5%E1%84%8C%E1%85%B3%E1%84%8B%E1%85%AA%20%E1%84%80%E1%85%A2%E1%86%A8%E1%84%8E%E1%85%A6%20%E1%84%89%E1%85%AE%E1%84%85%E1%85%B3%E1%86%AF%20%E1%84%80%E1%85%AE%20306a860601bb4022998c7b238e0c377a/_2020-12-08__2.31.51.png",alt:"%E1%84%80%E1%85%A8%E1%84%8C%E1%85%A5%E1%86%BC%20%E1%84%82%E1%85%A2%20%E1%84%86%E1%85%A9%E1%84%83%E1%85%B3%E1%86%AB%20S3%20Bucket%E1%84%8B%E1%85%B4%20%E1%84%89%E1%85%A1%E1%84%8B%E1%85%B5%E1%84%8C%E1%85%B3%E1%84%8B%E1%85%AA%20%E1%84%80%E1%85%A2%E1%86%A8%E1%84%8E%E1%85%A6%20%E1%84%89%E1%85%AE%E1%84%85%E1%85%B3%E1%86%AF%20%E1%84%80%E1%85%AE%20306a860601bb4022998c7b238e0c377a/_2020-12-08__2.31.51.png"}})])])}),[],!1,null,null,null);a.default=e.exports}}]);