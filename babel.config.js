const path = require('path');

module.exports = function (api) {
  api.cache(true);

  const moduleResolverPlugin = [
    [
      require.resolve('babel-plugin-module-resolver'),
      {
        root: [path.resolve('./')],
        alias: {
          '@': './src',
        },
      },
    ],
  ];

  return {
    plugins: [...moduleResolverPlugin],
    presets: ['babel-preset-expo'],
    env: {
      production: {
        plugins: ['react-native-paper/babel'],
      },
    },
  };
};
