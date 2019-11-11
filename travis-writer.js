const { write } = require('./writer');

const travisWriter = path => {
  const travis = `language: node_js
node_js: node`;
  write(path + '/.travis.yml', travis);
};

module.exports = travisWriter;