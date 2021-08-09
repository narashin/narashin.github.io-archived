---
title: EC2 Swap 설정 가이드
description: EC2 Swap 설정 가이드
tags: ['AWS', 'EC2', 'Swap']
---

# EC2 Swap 설정 가이드

## 고려사항

- EBS IOPS 확인

[스왑 공간 크기 계산](https://www.notion.so/1c1baab7d60b4bdda911930f1ae2b379)

## 스왑 파일 생성

```bash
$ sudo dd if=/dev/zero of=/swapfile bs=1M count=2000
```

1. `dd` 명령을 사용하여 루트 파일 시스템에 스왑 파일을 만듭니다. 2GB 로 생성하겠습니다.
   - (참고) `bs=1G count=2` 로는 `Memory exhausted` 에러가 발생하며 생성되지 않음.
   - 위 고려사항의 스왑 공간 크기 계산을 참고하여 수치를 설정

```bash
$ chmod 600 /swapfile
```

2. 스왑 파일의 읽기 및 쓰기 권한을 업데이트합니다.

- 권한 문제가 발생시 `sudo` 로 해결

```bash
$ mkswap /swapfile
```

3. 스왑 영역을 설정합니다.

```bash
$ swapon /swapfile
```

4. 스왑 공간에 스왑 파일을 추가하여 스왑 파일을 즉시 사용할 수 있도록 합니다.

```bash
$ swapon -s
```

5. 프로시저가 성공적인지 확인합니다.

```bash
$ vi /etc/fstab
```

6. `/etc/fstab` 파일을 편집하여 부팅 시 스왑 파일을 활성화 합니다.

- `/swapfile swap swap defaults 0 0` 추가

## 스왑 설정 확인

1. 스왑 설정은 reboot 이후에 적용됩니다.

```bash
$ cat /proc/meminfo
```

2. meminfo 를 확인하여 SwapTotal 수치를 확인합니다.

![~@img/ec2-swap/2019-01-1617.58.44.png](~@img/ec2-swap/2019-01-1617.58.44.png)

적용 전

![~@img/ec2-swap/2019-01-1617.58.22.png](~@img/ec2-swap/2019-01-1617.58.22.png)

적용 후

3. SwapTotal/Free의 수치가 위에서 설정한 수치(1M/2000 :: 2047996 kB)로 확인되었다면 적용이 된 것입니다.

## 참고

[스왑 파일을 사용하여 Amazon EC2 인스턴스의 스왑 공간으로 메모리 할당](https://aws.amazon.com/ko/premiumsupport/knowledge-center/ec2-memory-swap-file/)

[Amazon EBS 볼륨 초기화 - Amazon Elastic Compute Cloud](https://docs.aws.amazon.com/ko_kr/AWSEC2/latest/UserGuide/ebs-initialize.html)
