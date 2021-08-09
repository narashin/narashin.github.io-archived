---
title: CloudFront를 통하지 않고 ALB로 직접 들어오는 트래픽을 제한하고 싶다
description: CloudFront를 통하지 않고 ALB로 직접 들어오는 트래픽을 제한하고 싶다
tags: ['AWS', 'ALB', 'CloudFront']
---

# CloudFront를 통하지 않고 ALB로 직접 들어오는 트래픽을 제한하고 싶다

## 문제상황

![~@img/cloudfront-only-not-alb/traffic.png](~@img/cloudfront-only-not-alb/traffic.png)

1. 의도한 트래픽은 CloudFront를 통해 ALB로 접속하는 구조이다.
2. 그러나 2번과 같이 의도하지 않은 트래픽이 직접 ALB로 접속할 때 이를 방지하려면 어떻게 해야할까?
   - CF를 통하지 않을 경우 트래픽 제한 룰셋(Geo Restriction 등)을 정해도 이를 무시하고 접속하는 경우가 발생할 수 있으며, 공격에 취약해진다.

## 해결책

이런 경우, CloudFront에서 Origin Custom Header 를 설정하여 해당 Header 값과 일치하는 상황일 경우에만 ALB에서 타겟으로 전달하게 리스너를 설정해주면 CF에서 들어가는 트래픽만이 ALB에 연결된 타겟으로 연결된다.

## 실습

### CloudFront 설정

![~@img/cloudfront-only-not-alb/cloudfront-only-not-alb_3.16.33.png](~@img/cloudfront-only-not-alb/cloudfront-only-not-alb_3.16.33.png)

- CloudFront Distribution → Origins and Origin Groups에서 설정을 원하는 Origin을 선택하여 **Edit** 클릭

![~@img/cloudfront-only-not-alb/cloudfront-only-not-alb_3.18.37.png](~@img/cloudfront-only-not-alb/cloudfront-only-not-alb_3.18.37.png)

- 하단에 `Origin Custom Headers` 에 Custom Header Name과 Value 값을 임의로 설정한다.

### ELB 설정

![~@img/cloudfront-only-not-alb/cloudfront-only-not-alb_3.28.29.png](~@img/cloudfront-only-not-alb/cloudfront-only-not-alb_3.28.29.png)

- CloudFront에 연결된 Origin ALB를 선택하여 리스너 탭에서 **규칙 보기/편집** 클릭

![~@img/cloudfront-only-not-alb/cloudfront-only-not-alb_3.32.52.png](~@img/cloudfront-only-not-alb/cloudfront-only-not-alb_3.32.52.png)

- 상단의 탭에서 규칙을 추가(+ 버튼)하여 규칙을 추가한다.
  - **IF** `HTTP 헤더` 가 `X-CUSTOM-HEADER` / `rkskekfk` (CloudFront 에서 Origin Custom Header 로 설정한 값)
  - **THEN** 전달 `타겟` 설정

![~@img/cloudfront-only-not-alb/cloudfront-only-not-alb_3.38.01.png](~@img/cloudfront-only-not-alb/cloudfront-only-not-alb_3.38.01.png)

- 기본적으로 존재하는 규칙은 삭제할 수 없다.
- **THEN** 으로 그 외의 요청은 다 `403` 으로 보내게 설정해두었다.

### 확인

위의 설정 후 다시 CloudFront 접속 / ALB 직접 접속 한 결과

![~@img/cloudfront-only-not-alb/cloudfront-only-not-alb_3.40.27.png](~@img/cloudfront-only-not-alb/cloudfront-only-not-alb_3.40.27.png)

- CloudFront 로 접속

![~@img/cloudfront-only-not-alb/cloudfront-only-not-alb_3.40.40.png](~@img/cloudfront-only-not-alb/cloudfront-only-not-alb_3.40.40.png)

- ALB로 직접 접속
  - 403 반환
