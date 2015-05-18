var config = require('./');

module.exports = {
  watch: config.sourceDirectory + '/views/**/**/*.jade',
  src: config.sourceDirectory + '/views/**/*.jade',
  injectJade: config.publicTemp + '/**/*.html', 
  publicTemp: config.publicTemp,
  dest: config.publicDirectory,
  publicAssets: config.publicAssets
};