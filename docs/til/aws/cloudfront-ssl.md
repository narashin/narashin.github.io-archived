---
title: CloudFront를 이용한 SSL 설정
description: CloudFront를 이용한 SSL 설정
tags: ['AWS', 'CloudFront', 'SSL']
---

# CloudFront를 이용한 SSL 설정

## 탄력적 IP 부여

먼저 도메인을 연결할 인스턴스에 고정 아이피를 부여

1. EC2 → 네트워크 및 보안 → 탄력적 IP
2. 새 주소 할당 → 할당 → 할당된 IP 선택 후
3. 작업 → 주소 연결
4. 연결할 인스턴스의 ID를 고른 뒤 어소시에이트

## CloudFront 생성 및 설정

1. CloudFront → Create Distribution → Web → Get Started
2. Origin Domain Name에 이전에 탄력적 IP를 할당한 인스턴스의 퍼블릭 DNS 주소를 기입 (IP로는 설정 불가)
3. Default Cache Behavior Settings 에서 Distribution에 대한 정책 설정
4. Distribution Settings 설정
   - Alternate Domain Names(CNAMEs) 설정
   - SSL Certificate 설정
     - Custom SSL Certificate 로 ACM 으로 검증된 SSL Certificates Import
       (ACM 설정이 되어있는 계정으로 Distribution 생성)
5. Create Distribution
6. Status가 Deployed로 될 때까지 대기

## Route53 설정

1. Route 53 → Hosted zones → 해당 도메인 네임 클릭
2. Create Record Set 으로 Record Set 생성
   - Name 기입
   - CNAME 설정
   - Value에 위 CloudFront에서 생성한 Distribution 주소 기입
3. Save Record Set
