import 'angular';
import 'angular-mocks/angular-mocks';

const tests = require.context('./app/', true, /\.spec\.js/);
tests.keys().forEach(tests);

// requires all components in `project/src/components/**/index.js`
const components = require.context('./app/', true, /\.js$/);
components.keys().forEach(components);
