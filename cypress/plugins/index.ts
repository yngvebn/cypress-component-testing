import { startAngularDevServer } from '@jscutlery/cypress-angular';

module.exports = (on, config) => {
    console.log('registering dev-server');
  on('dev-server:start', (options) =>
    startAngularDevServer({ options, tsConfig: './tsconfig.cypress.json' })
  );
  return config;
};
