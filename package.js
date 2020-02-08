Package.describe({
  summary: 'Define and run db migrations.',
  version: '1.0.5',
  name: 'npvn:migrations',
  git: 'https://github.com/versolearning/meteor-migrations.git',
});

Package.on_use(function(api) {
  api.versionsFrom('METEOR@1.5');
  api.use('ecmascript');
  api.use(['underscore', 'check', 'mongo', 'logging'], 'server');
  api.addFiles(['migrations_server.js'], 'server');
  api.export('Migrations', 'server');
});

Package.on_test(function(api) {
  api.use('ecmascript');
  api.use(['percolate:migrations', 'tinytest']);
  api.addFiles('migrations_tests.js', ['server']);
});
