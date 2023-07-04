module.exports = function (api) {
  api.cache(true);

  return {
    presets: ["babel-preset-expo"],
    plugins: [
      [
        "module-resolver",
        {
          alias: {
            assets: "./src/assets",
            components: "./src/components",
            config: "./src/config",
            navigation: "./src/navigation",
            redux: "./src/redux",
            screens: "./src/screens",
            styles: "./src/styles",
            tabScreens: "./src/tabScreens",
            utils: "./src/utils",
          },
        },
      ],
    ],
  };
};
