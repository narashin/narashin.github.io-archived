---
title: AWS CLI를 이용한 계정 내 모든 S3 Bucket의 사이즈와 객체 수를 구하는 스크립트
description: AWS CLI를 이용한 계정 내 모든 S3 Bucket의 사이즈와 객체 수를 구하는 스크립트
tags: ['AWS', 'awscli', 'S3']
---

:::warning
bucket 사이즈가 너무 클 경우 || 객체가 많은 경우에 스크립트가 돌아가는 데에 한참 걸릴 것으로 예상됨( . .)
:::

# 계정 내 모든 S3 Bucket의 사이즈와 객체 수를 구하는 스크립트

```bash
#!/bin/bash
aws_profile=('awscli프로필' 'awscli프로필2');
#loop AWS profiles
for i in "${aws_profile[@]}"; do
  echo "${i}"
  buckets=($(aws --profile "${i}" --region <사용하는리전> s3 ls s3:// --recursive | awk '{print $3}'))
  #loop S3 buckets
  for j in "${buckets[@]}"; do
  echo "${j}"
  aws --profile "${i}" --region <사용하는리전> s3 ls s3://"${j}" --recursive --human-readable --summarize |  awk '{ array[NR]=$0 } END { for (i=NR-1; i<=NR; i++) print array[i] }'
  done
done
```

1. AWS CLI 에 저장된 프로필을 긁고
2. 프로필에 생성된 버킷 리스트를 긁고
3. 해당 버킷 내의 객체의 수와 사이즈를 프린트합니다.

   `aws --profile "${i}" --region <사용하는리전> s3 ls s3://"${j}" --recursive --human-readable --summarize | awk '{ array[NR]=$0 } END { for (i=NR-1; i<=NR; i++) print array[i] }'` 에서 `awk '{ array[NR]=$0 } END { for (i=NR-1; i<=NR; i++) print array[i] }'` 를 삭제하면 버킷내 모든 객체 정보까지 얻을 수 있습니다.

![~@img/s3-bucket-size/s3-bucket-size_2.31.51.png](~@img/s3-bucket-size/s3-bucket-size_2.31.51.png)
