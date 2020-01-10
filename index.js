#! /usr/bin/env node
const fs = require('fs');
const packageJsonWriter = require('./package-json-writer');
const gitignoreWriter = require('./gitignore-writer');
const dependenciesWriter = require('./dependencies-installer');
const devDependenciesWriter = require('./dev-dependencies-installer');
const webpackWriter = require('./webpack-writer');
const babelWriter = require('./babel-writer');
const eslintWriter = require('./eslint-writer');
const srcIndexWriter = require('./src-index-writer');
const travisWriter = require('./travis-writer');
const setupTestWriter = require('./setup-test-writer');
const redirectsWriter = require('./redirects-writer');

const path = process.argv[process.argv.length - 1];

if(path !== '.') {
  fs.mkdirSync(path);
}

fs.mkdirSync(`${path}/src`);

packageJsonWriter(`${path}`);
gitignoreWriter(`${path}`);
dependenciesWriter(`${path}`);
devDependenciesWriter(`${path}`);
webpackWriter(`${path}`);
babelWriter(`${path}`);
eslintWriter(`${path}`);
srcIndexWriter(`${path}`, `${path}`);
setupTestWriter(`${path}`);
travisWriter(`${path}`);
redirectsWriter(`${path}`);