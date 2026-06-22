/* eslint-disable quotes */
const { writeJson } = require('./writer');

const babelWriter = path => {
  const babel = {
    "presets": [
      "@babel/preset-env",
      "@babel/preset-react"
    ],
    "plugins": [
      "@babel/plugin-proposal-class-properties"
    ]
  };
  writeJson(path + '/.babelrc', babel);
};

module.exports = babelWriter;