const installer = require('./installer');

const depInstaller = (path) => {
  const dependencies = [
    'react',
    'react-dom',
    'react-router-dom',
    'copy-webpack-plugin'
  ];
  installer(path, dependencies, false);
};

module.exports = depInstaller;