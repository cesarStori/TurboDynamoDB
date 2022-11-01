import * as cdk from 'aws-cdk-lib';
import { Construct } from 'constructs';
import * as dynamodb from 'aws-cdk-lib/aws-dynamodb';

export class CdkDynamoStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    new dynamodb.Table(this, 'Catalogs', {
      partitionKey: {
        name: 'CatalogId',
        type: dynamodb.AttributeType.STRING
      }
    });

    new dynamodb.Table(this, 'Users', {
      partitionKey: {
        name: 'CURP',
        type: dynamodb.AttributeType.STRING
      }
    });
  }
}
