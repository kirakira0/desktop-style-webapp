const { defineConfig } = require("@vue/cli-service");

module.exports = defineConfig({
  transpileDependencies: true,
  chainWebpack: (config) => {
    config.module
      .rule("csv")
      .test(/\.csv$/)
      .use("csv-loader")
      .loader("csv-loader")
      .options({
        dynamicTyping: true,
        header: true,
        skipEmptyLines: true,
      });
  },
  configureWebpack: {
    resolve: {
      extensions: [".js", ".vue", ".json", ".csv"], // Add .csv to the list
    },
  },
});
