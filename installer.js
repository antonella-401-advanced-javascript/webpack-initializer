/* eslint-disable no-console */
const installer = (path, packages, dev) => {
  const { execSync } = require('child_process');
  if(dev) {
    console.log('Starting to install devDependencies');
    execSync(`npm i -D ${packages.join(' ')}`, {
      cwd: path,
      stdio: 'inherit'
    });
  }
  else {
    console.log('Starting to install dependencies');
    execSync(`npm i ${packages.join(' ')}`, {
      cwd: path,
      stdio: 'inherit'
    });
  }
  console.log('Done Installing');
};
module.exports = installer;