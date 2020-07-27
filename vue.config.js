module.exports = {
    publicPath: process.env.NODE_ENV === 'production' ? './' : '/',
    outputDir: 'dist',
    runtimeCompiler: true,
    devServer: {
      port: 8080,
      disableHostCheck: true,
    },
    css: {
      loaderOptions: {
        postcss: {
          plugins: [
            require("postcss-px-to-viewport")({
              unitToConvert: "px",
              viewportWidth: 750,
              unitPrecision: 5,
              propList: [
                "*"
              ],
              viewportUnit: "vw",
              fontViewportUnit: "vw",
              selectorBlackList: [],
              minPixelValue: 1,
              mediaQuery: false,
              replace: true,
              exclude: /(\/|\\)(node_modules)(\/|\\)/,
            })
          ]
        }
      }
    }
  }