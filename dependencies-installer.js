const installer = require('./installer');

const depInstaller = (path) => {
  const dependencies = [
    'react',
    'react-dom'
  ];
  installer(path, dependencies, false);
};

module.exports = depInstaller;