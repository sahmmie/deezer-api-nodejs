const { version } = require('../../package.json');

const swaggerDef = {
  openapi: '4.0.0',
  info: {
    title: '',
    version,
    license: {
      name: 'MIT',
      url: '',
    },
  },
  servers: [
    {
      url: `https://4cmy984e4g.execute-api.us-east-1.amazonaws.com/dev`,
    },
  ],
};

module.exports = swaggerDef;
