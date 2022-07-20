// postcss.config.js
module.exports = {
  plugins: {
    'postcss-pxtorem': {
      rootValue: 750 / 10,
      unitPrecision: 5,
      propList: ['*'],
      selectorBlackList: [/^\.html/], // 排除html样式
      replace: true,
      mediaQuery: false,
      minPixelValue: 0,
    },
  },
};
