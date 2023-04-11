const fs = require('fs');
const path = require('path');

/**
 * 自动添加代理
 * 遍历mock代理配置 START
 */
const getProxyConfig = () => {
  const mockFiles = fs.readdirSync(path.resolve(__dirname, '../src/server/api'));
  const proxyMap = {};
  mockFiles.forEach((fileName) => {
    if (!fileName.includes('.ts')) {
      proxyMap[`^/${fileName}`] = {
        target: process.env.SIS_PROXY_API,
        ws: true,
        secure: true,
        changeOrigin: true,
      };
    }
  });
  console.log('proxyMap_proxyMap', proxyMap)
  return proxyMap;
};

module.exports = getProxyConfig;
