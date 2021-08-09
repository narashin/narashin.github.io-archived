---
title: No Reboot로 생성한 EC2 AMI 내 파일크기가 0byte다
description: No Reboot로 생성한 EC2 AMI 내 파일크기가 0byte다
tags: ['AWS', 'EC2', 'TrobleShooting']
---

# No Reboot로 생성한 EC2 AMI 내 파일크기가 0byte다

[Amazon EBS 지원 Linux AMI 생성 - Amazon Elastic Compute Cloud](https://docs.aws.amazon.com/ko_kr/AWSEC2/latest/UserGuide/creating-an-ami-ebs.html)

> **_주의_**  
> **재부팅 안 함**을 선택한 경우 생성된 이미지의 파일 시스템 무결성을 보장할 수 없습니다.

# 발생한 현상

**No Reboot**로 AMI를 만들었더니 해당 AMI로 띄운 EC2 내 파일이 0byte다.

# 환경

- Linux (Amazon Linux 추정)

# Amazon Linux 파일 시스템의 이해

- Amazon Linux의 파일 시스템 : **ext4** (→Amazon Linux2의 경우 **xfs**로 확인됨**)**

  ```bash
  $ df -T /
  ```

  - **지연할당** (Delayed allocation) 기능 : 데이터를 디스크에 커밋할 준비가 될 때 데이터를 쓸 실제 블록을 할당. (기록된 후 30초 이상 경과한 캐시 페이지는 5초 이내에 실제 장치에 기록. 내보낼 페이지가 많으면 더 늦어질 경우도 있음.)
    - (장) 캐쉬에 데이터를 누적하여 블록 할당을 지연시키는 것으로, 파일 시스템이 해당 블록을 할당하는 것보다 성능이 향상 됨.
    - (단) 데이터 손실 가능성이 높음.
    - _데이터가 디스크에 즉시 기록되도록 보장하는 유일한 방법은 `fsync()` 를 알맞게 호출하는 것_

## Zero-length problem

- 특정 파일 조작에 의해 파일이 치환 된 후 시스템 강제 종료 등으로 인해 sync가 완료되지 않은 상태로 종료된 경우 파일이 0byte 가 되어버리는 것

- `fsync()` 를 사용하지 않고 기존 파일을 바꾸는 경우

  - 보통 1. 파일생성 → 2. 이름 변경 처리 → 3. 지연 할당 의 순서대로 처리되는데, 2에서 전원 차단이 발생하면 더이상 데이터가 기록이 되지 않기 때문에 0바이트가 되는 것

- 마운트 시 대책 : `noauto_da_alloc` 옵션 추가

  ```bash
  $ sudo mount 장치 대상 -t ext4 -o noauto_da_alloc
  ```

  - 위와 같이 옵션을 추가 하면 1. 파일 생성 → 2. 데이터 쓰기 → 3. 이름 변경 처리 의 순서로 변경됨
  - 단, 파일 처리 시퀀스의 성능이 저하 됨.
    `fsync` 이 자동실행 되지 않기 때문에 되려 zero-length problem을 야기 시킬 수 있음.

## 실제 지연할당 확인

```bash
$ watch -n 1 sudo grep -E "Dirty\|Writeback" /proc/meminfo
```

![image1](~@img/no-reboot-0byte/2019-02-2016.06.49.png)

- 위 명령어를 통해 내보내기를 하고 있지 않은 Dirty 페이지의 사이즈를 확인(Swap 디바이스에 내보내기 하는 것 포함)

```bash
$ vmstat 1
```

![image2](~@img/no-reboot-0byte/2019-02-2016.09.30.png)

- `bo` (블록 디바이스로의 내보내기량)의 값에 주목

# 정리

- ext4를 포함한 파일시스템에서는 고속화 등의 이유로 쓰기 처리를 할 때 디스크에 내보내기를 하기까지 지연 시간이 발생할 가능성이 있다.
- **따라서 내보내기 처리 전에 스냅샷을 하면, 파일 시스템의 무결성이 보장되지 않는다.**

# 대책?

- 디스크에 내보내기를 할 시간을 충분히 주고 나서, No Reboot 옵션으로 AMI를 뜬다.

- XFS의 경우 `xfs_freeze` 를 이용하여 쓰기 동작을 일시 정지 할 수 있다.

  - xfs_freeze 유틸리티를 이용하면 ext3、 ext4、 GFS2、 XFS、 BTRFS 등의 파일시스템에서도 쓸 수 있다고 하는데... 확인 필요

  [Red Hat Customer Portal](https://access.redhat.com/documentation/ja-jp/red_hat_enterprise_linux/6/html/storage_administration_guide/xfsfreeze)

  - `xfsprogs` 패키지를 통해 사용 가능. (x86_64 에서만 가능)

  ```bash
  $ xfs_freeze -f /mount/point
  ```

  - 위의 명령어(`xfs_freeze -f`)로 XFS 파일 시스템을 일시 정지 가능

  ```bash
  $ xfs_freeze -u /mount/point
  ```

  - 위의 명령어(`xfs_freeze -u`)로 일시 정지 상태 해제

  ```bash
  $ man xfs_freeze
  ```

  - 위의 명령어로 `xfs_freeze` 의 처리 세부 사항 확인 가능

- **No Reboot를 사용하지 않는다.**

  - Reboot 하여 확실히 디스크에 내보내기 할 수 있도록 설정한다.

# 참고자료

[ext4 の徹底調査](https://www.ibm.com/developerworks/jp/linux/library/l-anatomy-ext4/)

[No Reboot で AMI を作成したらファイルが消えたりした - Qiita](https://qiita.com/mechamogera/items/60a23cf5a52f8ebd8417)

[가상 메모리 통계 표시(vmstat ) - 시스템 관리 설명서: 고급 관리](
