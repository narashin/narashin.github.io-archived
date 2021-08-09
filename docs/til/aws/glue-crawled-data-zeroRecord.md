---
title: AWS Glue로 Crawling한 데이터가 Athena에서 Zero Record로 인식된다
description: AWS Glue로 Crawling한 데이터가 Athena에서 Zero Record로 인식된다
tags: ['AWS', 'Glue', 'Athena']
---

# AWS Glue로 Crawling한 데이터가 Athena에서 Zero Record로 인식된다

# 1. 문제상황

![~@img/glue-crawled-data-zeroRecord/glue-crawled-data-zeroRecord_12.04.04.png](~@img/glue-crawled-data-zeroRecord/glue-crawled-data-zeroRecord_12.04.04.png)

AWS Glue를 이용하여 S3의 데이터를 크롤링 하여 Athena 테이블을 생성시 데이터의 스키마는 제대로 로드됐으나, `Zero record` 를 반환하는 경우가 발생하였다.

# 2. 문제원인

[빈 결과값을 반환하는 Amazon Athena 쿼리 문제 해결](https://aws.amazon.com/ko/premiumsupport/knowledge-center/athena-empty-results/)

대체로 위의 상황에서 문제가 발생한다.

# 3. 해결방법

## (1) AWS Glue 에서 데이터 카탈로그 생성

### 가. 크롤러 생성

![~@img/glue-crawled-data-zeroRecord/glue-crawled-data-zeroRecord_10.20.44.png](~@img/glue-crawled-data-zeroRecord/glue-crawled-data-zeroRecord_10.20.44.png)

![~@img/glue-crawled-data-zeroRecord/glue-crawled-data-zeroRecord_10.20.51.png](~@img/glue-crawled-data-zeroRecord/glue-crawled-data-zeroRecord_10.20.51.png)

![~@img/glue-crawled-data-zeroRecord/glue-crawled-data-zeroRecord_10.21.10.png](~@img/glue-crawled-data-zeroRecord/glue-crawled-data-zeroRecord_10.21.10.png)

![~@img/glue-crawled-data-zeroRecord/glue-crawled-data-zeroRecord_10.21.19.png](~@img/glue-crawled-data-zeroRecord/glue-crawled-data-zeroRecord_10.21.19.png)

- 이렇게 특정 오브젝트를 선택하지 말고 상위 폴더 또는 버킷으로 지정
- 이때 S3의 포함 경로를 내가 크롤링 하고 싶은 특정 오브젝트가 아닌 "경로"만 지정한다.
  - 경로를 지정할 때는 마지막에 `/` 슬래쉬로 꼭 닫아준다.

![~@img/glue-crawled-data-zeroRecord/glue-crawled-data-zeroRecord_10.21.42.png](~@img/glue-crawled-data-zeroRecord/glue-crawled-data-zeroRecord_10.21.42.png)

- IAM 롤의 경우, Bucket 마다 새 역할을 부여하므로 기존에 썼던 IAM이 아니라, 새 버킷에는 새 IAM롤을 생성할 수 있도록 한다.

![~@img/glue-crawled-data-zeroRecord/glue-crawled-data-zeroRecord_10.21.48.png](~@img/glue-crawled-data-zeroRecord/glue-crawled-data-zeroRecord_10.21.48.png)

- 일정은 원하는대로 지정

![~@img/glue-crawled-data-zeroRecord/glue-crawled-data-zeroRecord_10.22.00.png](~@img/glue-crawled-data-zeroRecord/glue-crawled-data-zeroRecord_10.22.00.png)

- Athena의 어떤 데이터베이스에 테이블을 만들지 지정

### 나. Athena의 데이터베이스 및 테이블 확인

![~@img/glue-crawled-data-zeroRecord/glue-crawled-data-zeroRecord_11.52.33.png](~@img/glue-crawled-data-zeroRecord/glue-crawled-data-zeroRecord_11.52.33.png)

```sql
CREATE EXTERNAL TABLE `nara`(
  `account_name` string,
  `account_id` bigint,
  `year` bigint,
  `month` bigint,
  `yyyymmdd` string,
  ...)
ROW FORMAT DELIMITED
  FIELDS TERMINATED BY '\t'
STORED AS INPUTFORMAT
  'org.apache.hadoop.mapred.TextInputFormat'
OUTPUTFORMAT
  'org.apache.hadoop.hive.ql.io.HiveIgnoreKeyTextOutputFormat'
LOCATION
  's3://mzc-mbr-test/nara/'
TBLPROPERTIES (
  'CrawlerSchemaDeserializerVersion'='1.0',
  'CrawlerSchemaSerializerVersion'='1.0',
  'UPDATED_BY_CRAWLER'='mbr-test',
  'areColumnsQuoted'='false',
  'averageRecordSize'='319',
  'classification'='csv',
  'columnsOrdered'='true',
  'compressionType'='none',
  'delimiter'='\t',
  'objectCount'='1',
  'recordCount'='1965',
  'sizeKey'='627001',
  'skip.header.line.count'='1',
  'typeOfData'='file')
```

- 문제가 발생한 테이블의 DDL 쿼리를 살펴보면 LOCATION 값이 아래와 같이 특정 오브젝트를 바라볼 가능성이 높다.

```sql
LOCATION
  's3://mzc-mbr-test/nara/2020-08.tsv'
```

문제 해결을 위해, 아래와 같은 환경을 조성한다.

1. S3 버킷에는 크롤링 할 Object만 넣어둘 것
   - 크롤링할 문서와 다른 스키마의 같은 버킷에 두지 말 것.
   - **Athena Query문 또한 같은 Bucket에 넣지 말고 다른 Bucket에 따로 보관할 것.**
2. S3 Bucket Path를 지정할 때는 마지막에도 `/` 슬래쉬를 붙여서 Path를 완성시킬 것
3. S3 Bucket에 Glue가 접근할 수 있는 적절한 IAM롤을 지정할 것
