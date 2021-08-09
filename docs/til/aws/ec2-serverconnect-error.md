---
title: AWS EC2 서버 접속 오류시 확인사항
description: AWS EC2 서버 접속 오류시 확인사항
tags: ['AWS', 'EC2', 'TrobleShooting']
---

# 확인 사항

1. 인스턴스 정보
2. 사용 포트
3. ELB를 사용중이라면 ELB 정보, 대상그룹 이름
4. 연결 확인 방법 (어떤 URL을 어떻게 확인했는지)

---

- 해당 서버 들어가서 `curl http://localhost` 해서 정상적으로 출력되는지?
- 해당 서버에서 `sudo netstat -anlp` 를 통해 어떤 프로세스들이 어떤 리스너를 통해 통신하고 있는지 확인

```bash
sudo netstat -anlp
```

- ext-elb → ext-elb-target → int-elb → int-elb-target 까지 꼼꼼하게 다 확인
