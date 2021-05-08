const CracoLess = require('craco-less');
const CracoAntDesign = require('craco-antd');

module.exports = {
  plugins: [
    {
      plugin: CracoAntDesign,
    },
    {
      plugin: CracoLess,
      options: {
        noIeCompat: true,
      },
    },
  ],
};
