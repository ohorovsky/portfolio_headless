'use strict';

const evalSourceMapMiddleware = require('react-dev-utils/evalSourceMapMiddleware');
const noopServiceWorkerMiddleware = require('react-dev-utils/noopServiceWorkerMiddleware');
const ignoredFiles = require('react-dev-utils/ignoredFiles');
const redirectServedPath = require('react-dev-utils/redirectServedPathMiddleware');
const config = require('./webpack.config.dev');
const paths = require('./paths');

const protocol = process.env.HTTPS === 'true' ? 'https' : 'http';
const host = process.env.HOST || '0.0.0.0';

module.exports = function(proxy, allowedHost) {
  return {
    // Enable gzip compression of generated files.
    compress: true,
    // By default WebpackDevServer serves physical files from current directory
    // in addition to all the virtual build products that it serves from memory.
    static: {
      directory: paths.appPublic,
      publicPath: [config.output.publicPath],
      watch: {
        ignored: ignoredFiles(paths.appSrc),
      },
    },
    // Enable hot reloading server.
    hot: true,
    // WebpackDevServer is noisy by default so we emit custom message instead
    devMiddleware: {
      publicPath: config.output.publicPath,
    },
    // Enable HTTPS if the HTTPS environment variable is set to 'true'
    https: protocol === 'https',
    host: host,
    historyApiFallback: {
      // Paths with dots should still use the history fallback.
      disableDotRule: true,
      index: config.output.publicPath,
    },
    proxy,
    client: {
      overlay: {
        errors: true,
        warnings: false,
      },
    },
    allowedHosts: allowedHost ? [allowedHost] : 'all',
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': '*',
      'Access-Control-Allow-Headers': '*',
    },
    setupMiddlewares: (middlewares, devServer) => {
      if (!devServer) {
        throw new Error('webpack-dev-server is not defined');
      }

      // This lets us fetch source contents from webpack for the error overlay
      middlewares.unshift(evalSourceMapMiddleware(devServer));

      // Redirect to `PUBLIC_URL` or `homepage` from `package.json` if url not match
      middlewares.push(redirectServedPath(paths.publicUrlOrPath));

      // This service worker file is effectively a 'no-op' that will reset any
      // previous service worker registered for the same host:port combination.
      middlewares.push(noopServiceWorkerMiddleware(paths.publicUrlOrPath));

      return middlewares;
    },
  };
};
