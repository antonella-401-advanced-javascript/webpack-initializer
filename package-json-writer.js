const { writeJson } = require('./writer');

const packageWriter = path => {
  const packageJason = {
    'name': 'starter-code',
    'version': '1.0.0',
    'description': '',
    'main': 'src/index.js',
    'jest': {
      'snapshotSerializers': [
        'enzyme-to-json/serializer'
      ],
      'moduleNameMapper': {
        '\\.(css)$': 'identity-obj-proxy',
        '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$': '<rootDir>/__mocks__/fileMock.js'
      }
    },
    'scripts': {
      'test': 'jest --verbose',
      'test:watch': 'npm run test -- --watch',
      'start': 'webpack-dev-server --hot --mode development --devtool eval-source-map',
      'build': 'webpack -p --devtool source-map'
    },
    'keywords': [],
    'author': '',
    'license': 'ISC',
    'dependencies': {
    },
    'devDependencies': {
    }
  };

  writeJson(path + '/package.json', packageJason);
};

module.exports = packageWriter;