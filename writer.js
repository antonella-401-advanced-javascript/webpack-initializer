/* eslint-disable no-console */
const fs = require('fs');

const write = (path, str) => {
  fs.writeFileSync(path, str, 'utf8');
  if(path.match(/^.*[\\/]/)) {
    console.log(path.replace(/^.*[\\/]/, ''));
  }
  else {
    console.log(path);
  }
};
const writeJson = (path, obj) => {
  write(path, JSON.stringify(obj, null, 2));
};

module.exports = {
  write,
  writeJson
};