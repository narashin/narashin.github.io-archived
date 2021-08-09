---
title: AWS SES를 통해 Unverified Email로 Reply 보내기
description: AWS SES를 통해 Unverified Email로 Reply 보내기
tags: ['AWS', 'SES']
---

# AWS SES를 통해 Unverified Email로 Reply 보내기

## 0. 시나리오

![~@img/ses-unverified-email-reply/ses-unverifiedmail-reply.png](~@img/ses-unverified-email-reply/ses-unverifiedmail-reply.png)

From: System Mail `(Verified Mail)`(실제 Sender는 Seller)

`To: Customer`

로 발송된 메일의 답장을

`From : Customer (Unverified Mail)`

`To: Seller (Unverified Mail)`

로 보낼 수 있는지

## 1. AWS SES SDK 를 이용하여 메일 발송

- 2020-02 기준 SES 서비스는 `ap-northeast-2` (서울) 리전에서 릴리즈 되지 않았으므로, `ap-southeast-2` (시드니) 리전에서 진행합니다.

```js
var AWS = require('aws-sdk');
AWS.config.update({ region: 'ap-southeast-2' });

var ses = new AWS.SES();

var params = {
  Destination: {
    ToAddresses: ['Customer<nara@mz.co.kr>'],
  },
  Message: {
    Body: {
      Html: {
        Data: 'TEST EMAIL',
        Charset: 'UTF-8',
      },
      Text: {
        Data: 'TEST EMAIL',
        Charset: 'UTF-8',
      },
    },
    Subject: {
      Data: 'TEST EMAIL',
      Charset: 'UTF-8',
    },
  },
  Source: 'System<me@nara.dev>',
  ReplyToAddresses: ['Seller<popcornderby@gmail.com>'],
};

ses.sendEmail(params, function(err, data) {
  if (err) console.log(err, err.stack);
  else console.log(data);
});
```

[AWS SDK를 사용하여 이메일 전송](https://docs.aws.amazon.com/ko_kr/ses/latest/DeveloperGuide/examples-send-using-sdk.html)

## 2. 전송된 이메일 확인

![~@img/ses-unverified-email-reply/_2020-02-21__11.48.41.png](~@img/ses-unverified-email-reply/_2020-02-21__11.48.41.png)

## Raw 데이터 확인

![~@img/ses-unverified-email-reply/_2020-02-21__11.52.17.png](~@img/ses-unverified-email-reply/_2020-02-21__11.52.17.png)

```
Delivered-To: nara@mz.co.kr
Received: by 2002:a17:90a:e28a:0:0:0:0 with SMTP id d10csp1311896pjz;
        Thu, 20 Feb 2020 18:48:14 -0800 (PST)
X-Google-Smtp-Source: APXvYqxfelvKTuxgI3dfj9l5PygvHC4K1313/h32Xm1g4Xk7MC
X-Received: by 2002:aa7:8490:: with SMTP id u16mr14557121pfn.87.1582253294252;
        Thu, 20 Feb 2020 18:48:14 -0800 (PST)
ARC-Seal: i=1; a=rsa-sha256; t=1582253294; cv=none;
        d=google.com; s=arc-20160816;
        b=CYYE8+HTlPvFixMht04RLt=
ARC-Message-Signature: i=1; a=rsa-sha256; c=relaxed/relaxed; d=google.com; s=arc-20160816;
        h=feedback-id:date:message-id:mime-version:subject:to:reply-to:from
         :dkim-signature;
        bh=Bzr5xOzsfCgdfK9LlK4pITBNf/L0x8HExlTGQAtoRLY=;
        b=gooYVF
ARC-Authentication-Results: i=1; mx.google.com;
       dkim=pass header.i=@amazonses.com header.s=o6ptibvfbllhpdhtxr7klizy2riobquz header.b=UiFnAKOm;
       spf=pass (google.com: domain of 0108017065a53a57-f61ac9cf-0249-4635-b5c4-384bbc1003eb-000000@ap-southeast-2.amazonses.com designates 69.169.232.7 as permitted sender) smtp.mailfrom=0108017065a53a57-f61ac9cf-0249-4635-b5c4-384bbc1003eb-000000@ap-southeast-2.amazonses.com
Return-Path: <0108017065a53a57-f61ac9cf-0249-4635-b5c4-384bbc1003eb-000000@ap-southeast-2.amazonses.com>
Received: from b232-7.smtp-out.ap-southeast-2.amazonses.com (b232-7.smtp-out.ap-southeast-2.amazonses.com. [69.169.232.7])
        by mx.google.com with ESMTPS id s23si1208084pgn.426.2020.02.20.18.48.13
        for <nara@mz.co.kr>
        (version=TLS1_2 cipher=ECDHE-RSA-AES128-SHA bits=128/128);
        Thu, 20 Feb 2020 18:48:14 -0800 (PST)
Received-SPF: pass (google.com: domain of 0108017065a53a57-f61ac9cf-0249-4635-b5c4-384bbc1003eb-000000@ap-southeast-2.amazonses.com designates 69.169.232.7 as permitted sender) client-ip=69.169.232.7;
Authentication-Results: mx.google.com;
       dkim=pass header.i=@amazonses.com header.s=o6ptibvfbllhpdhtxr7klizy2riobquz header.b=UiFnAKOm;
       spf=pass (google.com: domain of 0108017065a53a57-f61ac9cf-0249-4635-b5c4-384bbc1003eb-000000@ap-southeast-2.amazonses.com designates 69.169.232.7 as permitted sender) smtp.mailfrom=0108017065a53a57-f61ac9cf-0249-4635-b5c4-384bbc1003eb-000000@ap-southeast-2.amazonses.com
DKIM-Signature: v=1; a=rsa-sha256; q=dns/txt; c=relaxed/simple; s=o6ptibvfbllhpdhtxr7klizy2riobquz; d=amazonses.com; t=1582253292; h=From:Reply-To:To:Subject:MIME-Version:Content-Type:Message-ID:Date:Feedback-ID; bh=Bzr5xOzsfCgdfK9LlK4pITBNf/L0x8HExlTGQAtoRLY=; b=Ui
From: System <me@nara.dev>
Reply-To: Seller <popcornderby@gmail.com>
To: Customer <nara@mz.co.kr>
Subject: TEST EMAIL
MIME-Version: 1.0
Content-Type: multipart/alternative; boundary="----=_Part_27885_1958420156.1582253292121"
Message-ID: <0108017065a53a57b-000000@ap-southeast-2.amazonses.com>
Date: Fri, 21 Feb 2020 02:48:12 +0000
X-SES-Outgoing: 2020.02.21-69.169.232.7
Feedback-ID: 1.ap-southeast-2.jYSXCFEdVk+v2lFFgc6I=:AmazonSES

------=_Part_27885_1958420156.1582253292121
Content-Type: text/plain; charset=UTF-8
Content-Transfer-Encoding: 7bit

TEST EMAIL
------=_Part_27885_1958420156.1582253292121
Content-Type: text/html; charset=UTF-8
Content-Transfer-Encoding: 7bit

TEST EMAIL
------=_Part_27885_1958420156.1582253292121--
```
