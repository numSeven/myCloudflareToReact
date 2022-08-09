const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
  app.use(
    '/api',
    createProxyMiddleware({
      target: 'https://mycloudflare_init.11980762821814.workers.dev',
      changeOrigin: true,
    })
  );
};