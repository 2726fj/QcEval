const { defineConfig } = require("@vue/cli-service");
module.exports = defineConfig({
  transpileDependencies: true,
  devServer: {
    host: "127.0.0.1",
    port: 8080,
    open: true,
    proxy: {
      "/api1": {
        target: "", //接口域名1
        changeOrigin: true,
        ws: true,
        secure: true,
        pathRewrite: {
          "^/api1": "",
        },
      },
      "/api2": {
        target: "", //接口域名2
        changeOrigin: true,
        ws: true,
        secure: true,
        pathRewrite: {
          "^/api2": "",
        },
      },
    },
    client: {
      overlay: false,
    },
  },
});
