import * as cdk from 'aws-cdk-lib'
import { SecretValue, Stack } from "aws-cdk-lib";
import { CodePipeline, CodePipelineSource, ShellStep } from 'aws-cdk-lib/pipelines';
import { Construct } from "constructs";

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
    }
}