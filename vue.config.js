const path = require("path");
// const IS_PRODUCTION = process.env.NODE_ENV === 'production'
const { defineConfig } = require('@vue/cli-service')
module.exports = {
  pages: {
    index: {
      entry: "src/main.js",
      template: "public/index.html",
      filename: "index.html"
    }
  },
  outputDir: 'dist',
  assetsDir: 'static',
  devServer: {
    clientLogLevel: "warning",
    hot: true,
    contentBase: "dist",
    compress: true,
    open: true,
    overlay: {warnings: false, errors: true},
    publicPath: "/",
    quiet: true,
    watchOptions: {
      poll: false,
      ignored: /node_modules/
    }
  },
  chainWebpack: config => {
    config.module
      .rule("vue")
      .use("vue-loader")
      .loader("vue-loader")
      .tap(options => {
        options.compilerOptions.preserveWhitespace = true;
        return options;
      });
  },
  productionSourceMap: false,
  // assetsDir: "./assets/",
  // configureWebpack: {
  //   plugins: [
  //     new CopyWebpackPlugin([
  //       {from: "src/assets/images", to: "assets/img"},
  //     ])
  //   ]
  // },

  lintOnSave: false,
  pluginOptions: {},

  transpileDependencies: ["vue-echarts", "resize-detector"]
};
