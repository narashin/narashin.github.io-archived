---
title: AWS Account 간 Domain 이동 - Route53
description: AWS Account 간 Domain 이동
tags: ['AWS', 'Route53']
---

# AWS Account 간 Domain 이동

[도메인에 대한 등록을 Amazon Route 53으로 이전하기 - Amazon Route 53](https://docs.aws.amazon.com/ko_kr/Route53/latest/DeveloperGuide/domain-transfer-to-route-53.html#domain-transfer-to-route-53-get-name-servers)

# 등록된 도메인을 다른 AWS 계정으로 이전하려면

---

![~@img/domain-move-to-another-account/2019-02-1212.24.10.png](~@img/domain-move-to-another-account/2019-02-1212.24.10.png)

현재 AWS 계정에 등록된 도메인을 다른 AWS 계정으로 이전하려면 아래와 같은 절차대로 진행한다.

1. 도메인이 현재 등록되어 있는 AWS 계정을 이용해 AWS Support Center 에 로그인한다.

   이때 루트 사용자든지, 아래와 같은 Role을 가진 IAM User 여야만 함.

   - `AdministratorAccess` 관리형 정책
   - `AmazonRoute53DomainsFullAccess` 관리형 정책
   - `AmazonRoute53FullAccess` 관리형 정책
   - _TransferDomains_, _DisableDomainTransferLock_, _RetrieveDomainAuthCode_ 작업을 수행할 수 있는 권한이 있어야 한다.

2. 케이스를 다음과 같이 생성한다.

   i. Case 분류 선택

   ![~@img/domain-move-to-another-account/2019-02-1212.26.57.png](~@img/domain-move-to-another-account/2019-02-1212.26.57.png)

   - Case : **[Account and Billing Support]**
   - Type : **[Billing]**
   - Category : **[Domain name registration issue]**

   ii. Case 세부 내용 기재

   ![~@img/domain-move-to-another-account/2019-02-1212.49.56.png](~@img/domain-move-to-another-account/2019-02-1212.49.56.png)

   - Subject : **Transfer a domain to another AWS account**
   - Description:
     - 이전하고자 하는 도메인 (Domain that i want to transfer)
     - 도메인이 현재 등록되어 있는 AWS 계정 번호(12-digit account Id of the AWS account that the domain is currently registered to)
     - 도메인 등록을 이전하고자 하는 AWS 계정 번호(12-digit account ID of the AWS account that you want to transfer domain registration to)
   - (6) 연락 방법
     - Web, Chat, Phone 중 선택

3. [Submit] 선택
4. 처리가 완료되면 아래처럼 회신이 온다

```plain
Hello,

I've successfully transferred the following domain(s) to the account you specified:

<도메인 주소>

When we transfer domain registration between AWS accounts, Amazon Route 53 does not transfer the hosted zone for your domain. If domain registration is associated with one account and the corresponding hosted zone is associated with another account, neither domain registration nor DNS functionality is affected. The only effect is that you'll need to sign into the Amazon Route 53 console using one account to see the domain, and sign in using the other account to see the hosted zone.

If you want to transfer the hosted zone to the other account, you must manually create the new hosted zone, create resource record sets in the new hosted zone, and update your domain with the name servers from the new hosted zone.

Once you create a new hosted zone for your domain at the other account, the final step is to assign the nameservers from the newly created hosted zone to your domain. Here are the instructions to do just that:

1) Navigate to the newly created Hosted Zone page for your domain at the other account's Route 53 console: https://console.aws.amazon.com/route53/
2) Choose the newly created hosted zone for your domain.
3) Make a note (click to copy)  the four name servers (NS) from the "newly" created hosted zone.
4) Navigate to the "Registered domains" details page for your domain at your Route 53 console (Click "Registered domains" at the left column)
5) Click on the domain name in question
6) Click "Add or edit name servers" (highlighted in blue, at the far right of the page)
7) Update name servers (NS) to match the four name servers (NS) in the newly created hosted zone (paste what you have copied in step 3).
8) Monitor the operation via a WHOIS lookup
9) Allow up to 48 hours for the change to propagate
10) Test to make sure your domain is resolving correctly per the record sets you have setup.
11) After making sure the domain's DNS is resolving correctly, delete the hosted zone in the losing account (account where the domain was transferred from).

I hope you find this information helpful, but please let us know if you need any additional assistance.

Best regards,

Kris V.
Amazon Web Services

Check out the AWS Support Knowledge Center, a knowledge base of articles and videos that answer customer questions about AWS services: https://aws.amazon.com/premiumsupport/knowledge-center/?icmpid=support_email_category

We value your feedback. Please rate my response using the link below.
===================================================

To contact us again about this case, please return to the AWS Support Center using the following URL:

https://console.aws.amazon.com/support/home#/case/?displayId=5719182371&language=en

(If you are connecting by federation, log in before following the link.)

*Please note: this e-mail was sent from an address that cannot accept incoming e-mail. Please use the link above if you need to contact us again about this same issue.

====================================================================
Learn to work with the AWS Cloud. Get started with free online videos and self-paced labs at
http://aws.amazon.com/training/
====================================================================

Amazon Web Services, Inc. and affiliates
```

- **Hosted Zone은 이전시켜 주지 않으므로, 별도로 생성해야 한다.**

  - (1) Route 53 → Hosted Zone → Create Hosted Zone → 도메인 등록
  - (2) NS 레코드 항목 복사
  - (3) Registered domains → Domain 클릭 → **[Add or edit name servers]**에 복사한 NS 레코드 업데이트
  - (4) WHOIS로 lookup (최대 48시간 소요)

    - 제대로 리졸빙 되는지 확인(이전 Account의 흔적이 잘 지워졌는지 확인)

      - DNSChecker를 사용해서 글로벌 DNS 전파상황을 확인할 수 있다.

      [DNS Checker - DNS Check Propagation Tool](https://dnschecker.org/)
