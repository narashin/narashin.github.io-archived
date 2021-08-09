---
title: MediaStore Container 내 전체 파일 삭제 스크립트
description: MediaStore Container 내 전체 파일 삭제 스크립트
tags: ['AWS', 'MediaStore']
---

# MediaStore Container 내 전체 파일 삭제 스크립트

## 상황

1. 콘솔에서 MediaStore 내 파일을 삭제할 때 객체를 하나씩 삭제할 수 밖에 없다.
2. MediaStore Container를 삭제 하기 위해서는 컨테이너 내 파일이 없어야 삭제가 가능하다.

## 해결방법

1. AWS Console 에서는 불가하니, AWS CLI를 통해 처리한다.
   - Config에 Access Key, Secret access key, Region 설정
2. 아래 스크립트 참고
   - 컨테이너 내 폴더가 있을 경우 따로 처리 해주어야 함.

[[小ネタ] AWS Elemental MediaStore のオブジェクトをまるっと削除する AWS CLI ワンライナー | DevelopersIO](https://dev.classmethod.jp/cloud/aws/aws-elemental-mediastore-delete-objects-aws-cli-oneliner/)

```bash
aws mediastore-data list-items \
  --endpoint=https://xxxxxxxxxxxxxx.data.mediastore.ap-northeast-1.amazonaws.com \
  --path=/folder \
  --output=text \
  | awk '{system("aws mediastore-data delete-object --endpoint=https://xxxxxxxxxxxxxx.data.mediastore.ap-northeast-1.amazonaws.com --path=/folder/"$6)}'
```
