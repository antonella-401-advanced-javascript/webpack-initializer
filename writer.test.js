const fs = require('fs');
const { writeJson } = require('./writer');

describe('writer', () => {
  it('writes string to file', () => {
    fs.writeFileSync = jest.fn();
    const path = './src';
    writeJson(path, { name: 'spot' });

    expect(fs.writeFileSync).toHaveBeenCalled();
    expect(fs.writeFileSync).toHaveBeenCalledWith(path, '{"name":"spot"}', 'utf8');
  });
});