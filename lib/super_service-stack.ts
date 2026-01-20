import * as cdk from 'aws-cdk-lib';
import { Construct } from 'constructs';
import * as sqs from 'aws-cdk-lib/aws-sqs';
import { Bucket } from 'aws-cdk-lib/aws-s3';
import { Topic } from 'aws-cdk-lib/aws-sns';
import * as kms from 'aws-cdk-lib/aws-kms'

export class SuperServiceStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    // const queue = new sqs.Queue(this, "NotificationsQueue", {
    //   queueName: "bucket-notifications",
    //   visibilityTimeout: cdk.Duration.minutes(5),
    //   retentionPeriod: cdk.Duration.days(2)
    // });

    // const bucket = new Bucket(this, "DocsBucket", {
    //   bucketName: "docs-bucket-jw2026",
    //   publicReadAccess: false
    // });

    // bucket.addEventNotification(cdk.aws_s3.EventType.OBJECT_CREATED, 
    //   new cdk.aws_s3_notifications.SqsDestination(queue));

    // const aws_sns_kms = kms.Alias.fromAliasName(
    //   this,
    //   "aws-managed-sns-kms-key",
    //   "alias/aws/sns",
    // )
    
    // const topic = new Topic(this, "SuperTopic", {
    //   masterKey: aws_sns_kms
    // });
  }
}
