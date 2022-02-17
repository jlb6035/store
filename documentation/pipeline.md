# Pipeline Process

The pipeline is triggered in circleci when a commit is pushed to github.

## Order of commands

1. The pipeline installs all dependencies
2. The pipeline runs the builds
3. The pipeline runs unit test
4. The pipeline deploys the app