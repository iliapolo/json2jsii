const { typescript } = require('projen');

const project = new typescript.TypeScriptProject({
  name: 'json2jsii',
  description: 'Generates jsii structs from JSON schemas',
  githubOptions: {
    mergify: false,
  },
  authorName: 'Elad Ben-Israel',
  authorEmail: 'elad.benisrael@gmail.com',
  repository: 'https://github.com/aws/json2jsii.git',
  deps: ['json-schema', 'camelcase', 'snake-case'],
  devDeps: ['@types/json-schema', 'jsii-srcmak', 'prettier'],
  releaseToNpm: true,
  minNodeVersion: '12.7.0',
  workflowNodeVersion: '12.22.0', // required by @typescript-eslint/eslint-plugin@5.5.0
  projenUpgradeSecret: 'PROJEN_GITHUB_TOKEN',
  defaultReleaseBranch: 'main',
  autoApproveOptions: {
    allowedUsernames: ['iliapolo'],
    secret: 'GITHUB_TOKEN',
  },
  autoApproveUpgrades: true,
});

project.gitignore.exclude('.vscode/');

project.synth();
