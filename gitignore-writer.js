const { write } = require('./writer');

const gitignoreWriter = path => {
  const gitignore = 'node_modules';
  write(path + '/.gitignore', gitignore);
};

module.exports = gitignoreWriter;