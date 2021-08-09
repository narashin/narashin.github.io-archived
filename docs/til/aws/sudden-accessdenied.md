---
title: 접속이 잘 되던 KeyPair가 갑자기 Permission Denied 된다
description: 접속이 잘 되던 KeyPair가 갑자기 Permission Denied 된다
tags: ['AWS', 'EC2', 'PostMortem', 'TroubleShooting']
---

# 접속이 잘 되던 KeyPair가 갑자기 Permission Denied 된다

## 포스트모텀(Post-mortem)

기존에 잘 사용 중이던 KeyPair(.pem)가`Permission denied (publickey,gssapi-keyex,gssapi-with-mic).` 됨

## 개요(Overview)

- 고객사에서, 어제 새로 생성한 인스턴스에 접근이 안 된다며 연락을 받았음.
- 새로 생성한 인스턴스 사양은 c5.large, OS는 CentOS7.
- 동일 구성으로 다른 VPC에 생성한 인스턴스는 접속이 원활했음(두 인스턴스간 KeyPair가 상이함).

## 시간 분석(Timeline)

- `16:01 PM` : 장애 상황 파악

  ```bash
  nara@MZC-NARA:~/.ssh|⇒  ssh -i 키0 ubuntu@접속할 인스턴스
  Last login: Fri Feb 15 16:25:53 2019 from 14.32.250.213
  ubuntu@ip-10-0-1-161:~$ ssh centos@10.0.45.159
  The authenticity of host '10.0.45.159 (10.0.45.159)' can't be established.
  Are you sure you want to continue connecting (yes/no)? yes
  Warning: Permanently added '10.0.45.159' (ECDSA) to the list of known hosts.
  centos@10.0.45.159: Permission denied (publickey,gssapi-keyex,gssapi-with-mic).
  ```

- `16:04 PM` : 다른 VPC에 동일 구성으로 생성된 인스턴스에 접속

  - 원활하게 접속 됨

    ```bash
    nara@MZC-NARA:~/.ssh|⇒  ssh -i 키0 ubuntu@다른 인스턴스
    Last login: Tue Feb 12 13:29:59 2019 from 14.32.250.213
    ubuntu@ip-10-254-1-24:~$ ssh centos@10.254.25.26
    The authenticity of host '10.254.25.26 (10.254.25.26)' can't be established.
    Are you sure you want to continue connecting (yes/no)? yes
    Warning: Permanently added '10.254.25.26' (ECDSA) to the list of known hosts.
    [centos@ip-10-254-25-26 ~]$
    ```

- `16:10 PM` : 접속 오류가 발생한 인스턴스와 동일 VPC에, 동일 KeyPair로 생성된 다른 인스턴스에 접속 시도

  - 해당 KeyPair를 사용하여 접속하는 인스턴스에 모두 접속 실패. (`Permission denied`)

    ```bash
    ubuntu@ip-10-0-1-161:~$ ssh centos@10.0.45.159
    centos@10.0.45.159: Permission denied (publickey,gssapi-keyex,gssapi-with-mic).
    ubuntu@ip-10-0-1-161:~$ ssh ubuntu@10.0.17.22
    ubuntu@10.0.17.22's password:

    ubuntu@ip-10-0-1-161:~$ ssh ubuntu@10.0.57.39
    The authenticity of host '10.0.57.39 (10.0.57.39)' can't be established.
    ECDSA key fingerprint is SHA256:v4eIpa+LzMevP9j/Zswex0aZwKUuGiWz7mkT2f489vc.
    Are you sure you want to continue connecting (yes/no)? yes
    Warning: Permanently added '10.0.57.39' (ECDSA) to the list of known hosts.
    ubuntu@10.0.57.39: Permission denied (publickey).
    ubuntu@ip-10-0-1-161:~$ ssh ubuntu@10.0.101.55
    ubuntu@10.0.101.55's password:

    ubuntu@ip-10-0-1-161:~$ ssh ec2-user@10.0.51.240
    ec2-user@10.0.51.240's password:

    ubuntu@ip-10-0-1-161:~$ ssh ubuntu@10.0.25.64
    The authenticity of host '10.0.25.64 (10.0.25.64)' can't be established.
    ECDSA key fingerprint is SHA256:g4A.
    Are you sure you want to continue connecting (yes/no)? yes
    Warning: Permanently added '10.0.25.64' (ECDSA) to the list of known hosts.
    ubuntu@10.0.25.64: Permission denied (publickey).
    ```

- `ssh -vv` 명령어를 통해 debug 메시지 출력

  ```bash
  ubuntu@ip-10-0-1-161:~$ ssh -vv centos@10.0.45.159
  OpenSSH_7.6p1 Ubuntu-4ubuntu0.2, OpenSSL 1.0.2n  7 Dec 2017
  debug1: Reading configuration data /etc/ssh/ssh_config
  debug1: /etc/ssh/ssh_config line 19: Applying options for *
  debug2: resolving "10.0.45.159" port 22
  debug2: ssh_connect_direct: needpriv 0
  debug1: Connecting to 10.0.45.159 [10.0.45.159] port 22.
  debug1: Connection established.
  debug1: key_load_public: No such file or directory
  debug1: identity file /home/ubuntu/.ssh/id_rsa type -1
  debug1: key_load_public: No such file or directory
  debug1: identity file /home/ubuntu/.ssh/id_rsa-cert type -1
  debug1: key_load_public: No such file or directory
  debug1: identity file /home/ubuntu/.ssh/id_dsa type -1
  debug1: key_load_public: No such file or directory
  ...
  debug2: languages stoc:
  debug2: first_kex_follows 0...
  debug1: Authentications that can continue: publickey,gssapi-keyex,gssapi-with-mic
  debug1: Trying private key: /home/ubuntu/.ssh/id_rsa
  debug1: Trying private key: /home/ubuntu/.ssh/id_dsa
  debug1: Trying private key: /home/ubuntu/.ssh/id_ecdsa
  debug1: Trying private key: /home/ubuntu/.ssh/id_ed25519
  debug2: we did not send a packet, disable method
  debug1: No more authentication methods to try.
  centos@10.0.45.159: Permission denied (publickey,gssapi-keyex,gssapi-with-mic).
  ```

## 응급 조치(Immediate Action)

---

- `ssh-add -l` 를 통해 ssh-agent 에 등록된 키를 확인하고 `Permission denied` 된 KeyPair가 등록되어 있지 않음을 확인.

  ```bash
  nara@MZC-NARA:~/.ssh|⇒  ssh-add -l
  2048 SHA256:--키1 (RSA)
  2048 SHA256:--키2 (RSA)
  2048 SHA256:--키3 (RSA)
  ```

- `ssh-add -D` 옵션으로 등록된 키를 다 삭제한 후, 오류가 발생한 Key를 등록함.

  ```bash
  nara@MZC-NARA:~/.ssh|⇒  ssh-add -l
  2048 SHA256:--키0 (RSA)
  ```

- 접속 확인

  ```bash
  nara@MZC-NARA:~/.ssh|⇒  ssh -i 키0 ubuntu@접속할 인스턴스
  Welcome to Ubuntu 18.04.1 LTS (GNU/Linux 4.15.0-1031-aws x86_64)

   * Documentation:  https://help.ubuntu.com
   * Management:     https://landscape.canonical.com
   * Support:        https://ubuntu.com/advantage

    System information as of Fri Feb 15 16:53:11 KST 2019

    System load:  0.04               Processes:           121
    Usage of /:   11.7% of 29.02GB   Users logged in:     1
    Memory usage: 41%                IP address for eth0: 10.0.1.161
    Swap usage:   0%

   * 'snap info' now shows the freshness of each channel.
     Try 'snap info microk8s' for all the latest goodness.

    Get cloud support with Ubuntu Advantage Cloud Guest:
      http://www.ubuntu.com/business/services/cloud

   * Canonical Livepatch is available for installation.
     - Reduce system reboots and improve kernel security. Activate at:
       https://ubuntu.com/livepatch

  103 packages can be updated.
  0 updates are security updates.

  *** System restart required ***
  Last login: Fri Feb 15 16:52:32 2019 from
  ubuntu@ip-10-0-1-161:~$ ssh centos@10.0.45.159
  [centos@ip-10-0-45-159 ~]$  exit
  ```

## 근본 원인 분석(Root Cause Analysis)

---

- `ssh-add` 로 등록되어 관리되고 있다고 생각한 KeyPair가 사실은 등록되어있지 않았음

## 5Why 분석(5Why Analysis)

---

- `ssh-agent` 에 대한 몰이해

## 논의(Discussion)

---

- -

## 예방책(Preventative Measures)

---

- -

## 모니터링(Monitoring)

---

- -
