const baseConfig = require('../../eslint.config.cjs')

module.exports = [
  ...baseConfig,
  {
    ignores: ['build', 'public/build'],
  },
]
