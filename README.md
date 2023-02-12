# nodejs-healthcheck.

## 3. Chat bots.

### 3.1 About me Bot.

#### Task.
Create telegram bot what supports these commands:

1. /about – provides short info about you.
2. /links – provides list of your social links (github, linkedid, etc).
3. /start and /help – shows list of commands with reply markup.

During the design phase prepare about text and links list.

#### Bot.
```
name: KhitrovAboutMeBot
link: http://t.me/KhitrovAboutMeBot
```

#### How to run locally (dev)
```shell
npm run dev
```
#### How to run globally (prod)
> **Note**
> Before executing, make sure that you have:
> - aws account
> - aws user with AmazonECS_FullAccess and AmazonEC2ContainerRegistryFullAccess roles
> - aws ecsTaskExecutionRole role
1. Configure AWS CLI, AWS SSM and login to AWS ECR.
Add to AWS Systems Manager -> Parameter Store telegram bot token.
```shell
aws configure
aws ecr get-login-password --region us-east-2 | docker login --username AWS --password-stdin 698445805226.dkr.ecr.us-east-2.amazonaws.com
```
2. Build image, create repository and push.
```shell
docker build -t nodejsaboutmebot:1.0 .
aws ecr create-repository --repository-name nodejsaboutmebot --image-scanning-configuration scanOnPush=true --region us-east-2
docker tag nodejsaboutmebot:1.0 698445805226.dkr.ecr.us-east-2.amazonaws.com/nodejsaboutmebot:1.0
docker push 698445805226.dkr.ecr.us-east-2.amazonaws.com/nodejsaboutmebot:1.0
```
3. Create AWS ECS Fargate cluster and run service.
```shell
aws ecs create-cluster --cluster-name telegram-bots-cluster
aws ecs register-task-definition --cli-input-json  file://aws-ecs-fargate-task-definition.json
aws ecs create-service --cluster telegram-bots-cluster --service-name nodejs-about-me-bot-service --task-definition nodejs-about-me-bot-task:1 --desired-count 1 --launch-type "FARGATE" --network-configuration "awsvpcConfiguration={subnets=[subnet-91d56cdd],securityGroups=[sg-00f96819122999b45],assignPublicIp=ENABLED}"
```
4. Delete service, cluster and repository.
```shell
aws ecs delete-service --cluster telegram-bots-cluster --service nodejs-about-me-bot-service --force
aws ecs delete-cluster --cluster telegram-bots-cluster
aws ecr delete-repository --repository-name nodejsaboutmebot --force
```
