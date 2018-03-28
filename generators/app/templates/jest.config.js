const jestConfig = require('kcd-scripts/jest')

module.exports = Object.assign(jestConfig, {
  setupFiles: ['<rootDir>/tests.setup.js'],
})
