// https://github.com/vitejs/vite/blob/master/src/node/config.ts
const path = require('path')

module.exports ={
  port: 8001,
  // https://github.com/vitejs/vite#dev-server-proxy
  proxy: {
    '/api': {
      target: 'http://localhost:8000',
      changeOrigin: true
    }
  },
  alias: {
    '/@/': path.resolve(__dirname, './src')
  },
  sourcemap: true
}