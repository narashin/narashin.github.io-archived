---
title: ACM을 이용한 인증서 발급 및 적용 가이드
description: ACM을 이용한 인증서 발급 및 적용 가이드
tags: ['AWS', 'ACM', 'SSL']
---

# ACM을 이용한 인증서 발급 및 적용 가이드

# AWS Cetificate Manager (ACM)를 이용한 인증서 발급

1. AWS > 서비스 > Certificate Manager
2. 인증서 요청
3. 공인 인증서 요청 > 인증서 요청
4. 도메인 이름 추가 > 다음
   - 이 인증서에 추가 이름을 추가할 수 있습니다. 예를 들어, "[www.example.com](http://www.example.com/)"에 대한 인증서를 요청하는 경우 "[example.com](http://example.com/)" 이름을 추가하면 고객이 어느 쪽 이름으로도 사이트에 접속할 수 있습니다.
5. DNS 검증, 이메일 검증 중 방식 택 1 > 검토
   - DNS 검증 : 사용자의 인증서 요청에서 도메인 DNS 구성을 수정할 권한을 가지고 있거나 얻을 수 있는 경우
   - 이메일 검증 : 사용자의 인증서 요청에서 도메인 DNS 구성을 수정할 권한이 없거나 얻을 수 없는 경우
6. 검토 화면에서 최종적으로 SSL 인증서를 신청하려는 도메인명과 검증방법 확인 후 > 확인 및 요청
7. 5번의 검증 방법이 완료되기 전까진 [검증 상태] 가 [검증 보류]로 나타남 > 계속
8. 인증서의 세부 정보를 확인할 수 있는 화면으로 돌아옴

   ![~@img/acm-ssl/2018-10-2514.19.00.png](~@img/acm-ssl/2018-10-2514.19.00.png)

9. 세부정보에서 [검증 미완료] 상태가 계속되면 검증 완료가 되지 않은 것이니 [검증 미완료] 알림창에서 [자세히 알아보기]를 클릭하여 자신의 검증 방법에 따른 검증 절차를 알아보고 검증 작업을 완료 시켜야함
   - DNS 검증 : [https://docs.aws.amazon.com/ko_kr/acm/latest/userguide/gs-acm-validate-dns.html](https://docs.aws.amazon.com/ko_kr/acm/latest/userguide/gs-acm-validate-dns.html)
   - 이메일 검증 : [https://docs.aws.amazon.com/ko_kr/acm/latest/userguide/gs-acm-validate-email.html](https://docs.aws.amazon.com/ko_kr/acm/latest/userguide/gs-acm-validate-email.html)

## SSL 적용 전에 알아두어야 할 지원 리전

[지원하는 리전 - AWS Certificate Manager](https://docs.aws.amazon.com/ko_kr/acm/latest/userguide/acm-regions.html)

# Elastic Load Balancer (ELB)를 이용한 SSL 적용

1. AWS > 서비스 > EC2 > 로드밸런서
2. SSL 설치할 로드밸런서 선택 > 리스너 탭 > 리스너 추가
3. [프로토콜 : 포트] HTTPS : 443
4. [기본 작업] 1. 전달 대상 > 로드밸런서 대상 그룹 선택
5. [기본 SSL 인증서] > ACM / 설치할 SSL 인증서 선택 (위에서 ACM 발급 받은 인증서 선택)
6. 우측 상단 저장

# CloudFront (CF) 를 이용한 SSL 적용

1. AWS > 서비스 > CloudFront
2. Distribution 선택
3. General 탭 > Edit

![~@img/acm-ssl/2018-10-2514.33.47.png](~@img/acm-ssl/2018-10-2514.33.47.png)

4. SSL Certificate > Custom SSL Certificate 아래 텍스트 박스를 클릭하면 ACM을 통해 발급받은 SSL 인증서가 목록에 뜨게 됨

5. 원하는 인증서 선택 하여 적용
