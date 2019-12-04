const { write } = require('./writer');

const setupTestWriter = path => {
  const setupTest = `import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });`;

write(path + '/src/setupTest.js', setupTest);
};

module.exports = setupTestWriter;