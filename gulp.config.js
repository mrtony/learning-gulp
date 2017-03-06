module.exports = function() {
  var client = './src/client/';
  var clientApp = client + 'app/'

  var config = {
    client: client,
    //all js to vet
    alljs: ['./src/**/*.js'],
    index: client + 'index.html',
    js: [
      clientApp + '**/*.module.js',
      clientApp + '**/*.js',
      '!' + clientApp + '**/*.spec.js',
    ],

    bower: {
      json: require('./bower.json'),
      directory: './bower_components',
      ignorePath: '../..'
    }
  }

  config.getWiredepDefaultOptions = function() {
    return {
      bowerJson: config.bower.json,
      directory: config.bower.directory,
      ignorePath: config.bower.ignorePath
    }
  };

  return config;
}