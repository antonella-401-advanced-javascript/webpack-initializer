const { write } = require('./writer');

const redirectsWriter = path => {
  const redirects = `/*  /index.html   200`;

  write(path + '/public/_redirects', redirects);
};

module.exports = redirectsWriter;