---
title: MediaConvert 작업 생성시 특정 Queue를 지정할 수 있는 Lambda 코드
description: MediaConvert 작업 생성시 특정 Queue를 지정할 수 있는 Lambda 코드
tags: ['AWS', 'MediaConvert', 'python']
---

# MediaConvert 작업 생성시 특정 Queue 를 지정할 수 있는 Lambda 코드

MediaConvert 작동 Lambda 코드는 다음과 같습니다.

```python
#!/usr/bin/env python

import json
import os
import uuid
import boto3
import urlparse

from botocore.client import ClientError

def handler(event, context):

    assetID = str(uuid.uuid4())
    sourceS3Bucket = event['Records'][0]['s3']['bucket']['name']
    sourceS3Key = event['Records'][0]['s3']['object']['key']
    sourceS3 = 's3://'+ sourceS3Bucket + '/' + sourceS3Key
    sourceS3Basename = os.path.splitext(os.path.basename(sourceS3))[0]
    destinationS3 = 's3://' + os.environ['DestinationBucket']
    destinationS3baseDir = sourceS3Key.split('.')[0]
    destinationS3basename = os.path.splitext(os.path.basename(destinationS3))[0]
    mediaConvertRole = os.environ['MediaConvertRole']
    region = os.environ['AWS_DEFAULT_REGION']
    statusCode = 200
    body = {}


    jobMetadata = {'assetID': assetID}

    print (json.dumps(event))

    try:
        with open('job.json') as json_data:
            jobSettings = json.load(json_data)
            print(jobSettings)

        mc_client = boto3.client('mediaconvert', region_name=region)
        endpoints = mc_client.describe_endpoints()
        client = boto3.client('mediaconvert', region_name=region, endpoint_url=endpoints['Endpoints'][0]['Url'], verify=False)

        jobSettings['Inputs'][0]['FileInput'] = sourceS3

        S3KeyHLS = destinationS3baseDir + '/HLS/' + sourceS3Basename
        jobSettings['OutputGroups'][0]['OutputGroupSettings']['HlsGroupSettings']['Destination'] \
            = destinationS3 + '/' + S3KeyHLS

        S3KeyWatermark = destinationS3baseDir + '/MP4/' + sourceS3Basename
        jobSettings['OutputGroups'][1]['OutputGroupSettings']['FileGroupSettings']['Destination'] \
            = destinationS3 + '/' + S3KeyWatermark

        S3KeyThumbnails = destinationS3baseDir + '/Thumbnails/' + sourceS3Basename
        jobSettings['OutputGroups'][2]['OutputGroupSettings']['FileGroupSettings']['Destination'] \
            = destinationS3 + '/' + S3KeyThumbnails

        print('jobSettings:')
        print(json.dumps(jobSettings))

        job = client.create_job(Role=mediaConvertRole, UserMetadata=jobMetadata, Settings=jobSettings)
        print (json.dumps(job, default=str))

    except Exception as e:
        print 'Exception: %s' % e
        statusCode = 500
        raise

    finally:
        return {
            'statusCode': statusCode,
            'body': 'test',
            'headers': {'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*'}
        }
```

[https://boto3.amazonaws.com/v1/documentation/api/latest/reference/services/mediaconvert.html#MediaConvert.Client.create_job](https://boto3.amazonaws.com/v1/documentation/api/latest/reference/services/mediaconvert.html#MediaConvert.Client.create_job)

위 boto3 문서를 참고하면, create_job에서 Queue 인자를 받을 수 있는 것을 알 수 있습니다.

```python
response = client.create_job(
    BillingTagsSource='QUEUE'|'PRESET'|'JOB_TEMPLATE',
    ClientRequestToken='string',
    JobTemplate='string',
    Queue='string',
    Role='string',
    Settings={
...
```

기존 환경 변수에서는 DestinationBucket과 MediaConvertRole만을 처리하였으나, Queue 정보를 위해 MediaConvertQueue를 추가하겠습니다.

`convert.py` 소스코드에 다음을 추가합니다.

```python
mediaConvertQueue = os.environ['MediaConvertQueue']
...
job = client.create_job(Queue=mediaConvertQueue, Role=mediaConvertRole, UserMetadata=jobMetadata, Settings=jobSettings)
```

MediaConvertQueue 에는 적용 시킬 대기열의 ARN 값을 넣어줍니다.

---

1.  convert.py소스코드 수정

    ![~@img/mediaconvert-specific-queue/2018-12-1114.35.47.png](~@img/mediaconvert-specific-queue/2018-12-1114.35.47.png)

- `mediaConvertQueue = os.environ['MediaConvertQueue']`

  ![~@img/mediaconvert-specific-queue/2018-12-1114.37.08.png](~@img/mediaconvert-specific-queue/2018-12-1114.37.08.png)

- `Queue=mediaConvertQueue` 추가

2. 환경 변수 추가

![~@img/mediaconvert-specific-queue/2018-12-1114.38.10.png](~@img/mediaconvert-specific-queue/2018-12-1114.38.10.png)

- `MediaConvertQueue` : 지정을 원하는 대기열의 ARN 값 추가

3. 확인

![~@img/mediaconvert-specific-queue/2018-12-1114.21.50.png](~@img/mediaconvert-specific-queue/2018-12-1114.21.50.png)

- 2번에서 지정한 Queue(test-queue)로 작업이 처리 되었는지 MediaConvert 작업에서 확인
