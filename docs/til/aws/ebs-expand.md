---
title: EBS 볼륨 확장 하는 방법
description: EBS 볼륨 확장 하는 방법
tags: ['AWS', 'EBS']
---

# EBS 볼륨 확장 하는 방법

```bash
$ lsblk
```

명령어를 통해 파티션 영역 확인

파티션 확장을 위하여

```bash
$ sudo growpart /dev/xvda 1
```

위의 명령어 입력

```bash
$ lsblk
```

명령을 실행하여 파티션이 확장 되었는지 확인

```bash
$ df -h
```

마운트 영역 확인

디스크 공간 확장을 위해

```bash
$ sudo resize2fs /dev/svda1
```

```bash
$ df- h
```

디스크 공간 확인

---

볼륨 확장 적용 방법 >>

1. lsblk 를 통해 볼륨 파티션 확인

500G 중 250G만 사용되고 있음을 확인

2. 명령어를 통해 파티션 확장

\$ sudo growpart /dev/nvme0n1 1

3. 파티션 확장 확인

4. df -h 를 통해 마운트 영역 확인

5. 명령어를 통해 디스크 공간 확장

```bash
$ sudo resize2fs /dev/nvme0n1p1
```

6. 다시한번 df -h 를 통해 확인

## 참고

[[AWS] 운영중인 EC2 Instance의 EBS 볼륨 확장하기](http://devstory.ibksplatform.com/2017/10/aws-ec2-instance-ebs.html)
