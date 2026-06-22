const installer = require('./installer');
const childProcess = require('child_process');


describe('installer test', () => {
  const path = './';
  
  it('installs dependencies', () => {
    childProcess.execSync = jest.fn();
    const dep = ['react'];
    installer(path, dep, false);

    expect(childProcess.execSync).toHaveBeenCalled();
    expect(childProcess.execSync).toHaveBeenCalledWith('npm i react', { cwd: './', stdio: 'inherit' });
  });

  it('installs dev dependencies', () => {
    childProcess.execSync = jest.fn();
    const devDep = ['eslint', 'jest'];
    installer(path, devDep, true);

    expect(childProcess.execSync).toHaveBeenCalled();
    expect(childProcess.execSync).toHaveBeenCalledWith('npm i -D eslint jest', { cwd: './', stdio: 'inherit' });
  });

});