// eslint-disable-next-line
const webpack = require('webpack');
const withCSS = require('@zeit/next-css');
const path = require('path');
const nextRuntimeDotenv = require('next-runtime-dotenv');

const withConfig = nextRuntimeDotenv({
  public: ['HTTP_PROTOCOL', 'GRAPHQL_URI', 'APP_REDIRECT_URL', 'DOMAIN'],
});

module.exports = withConfig(
  withCSS({
    webpack(config) {
      // eslint-disable-next-line no-param-reassign
      config.resolve.alias['@app'] = path.resolve('./');
      return config;
    },
  }),
);
