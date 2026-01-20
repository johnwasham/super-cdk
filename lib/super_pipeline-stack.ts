import * as cdk from 'aws-cdk-lib'
import { SecretValue, Stack } from "aws-cdk-lib";
import { CodePipeline, CodePipelineSource, ManualApprovalStep, ShellStep } from 'aws-cdk-lib/pipelines';
import { Construct } from "constructs";
import { SuperAppStage } from './stage';

export class SuperPipelineStack extends Stack {
    constructor(scope: Construct, id: string, props?: cdk.StackProps) {
        super(scope, id, props);

        const pipeline = new CodePipeline(this, "DeploymentPipeline", {
            pipelineName: "SuperPipeline",
            synth: new ShellStep("Synth", {
                input: CodePipelineSource.gitHub("johnwasham/super-cdk", "main"),
                commands: [
                    'npm ci',
                    'npm run build',
                    'npx cdk synth'
                ]
            })
        });

        const betaStage = pipeline.addStage(new SuperAppStage(this, "beta", {
            env: { account: "418052138440", region: "us-west-1" }
        }));

        betaStage.addPost(new ManualApprovalStep("Manual approval required."));

        const prodState = pipeline.addStage(new SuperAppStage(this, "prod", {
            env: { account: "418052138440", region: "us-west-1" }
        }));
    }
}
