Package.describe({
  name: 'allow-deny',
  version: '0.0.1',
  // Brief, one-line summary of the package.
  summary: '',
  // URL to the Git repository containing the source code for this package.
  git: '',
  // By default, Meteor will default to using README.md for documentation.
  // To avoid submitting documentation, set this field to null.
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.use([
    'ecmascript',
    'underscore',
    'minimongo', // Just for LocalCollection.wrapTransform :[
    'check',
    'ejson',
  ]);

  api.addFiles('allow-deny.js');
  api.export('AllowDeny');
});

Package.onTest(function(api) {
  api.use('ecmascript');
  api.use('tinytest');
  api.use('allow-deny');
  api.addFiles('allow-deny-tests.js');
});