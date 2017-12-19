// ----------------------------------------------------------------------
// ----------------------------------------------------------------------

import 'angular';
import 'angular-cookies';
import 'angular-touch';
import 'angular-animate';
import 'angular-ui-router';
import 'angular-ui-bootstrap'
import 'angular-sanitize';

// // IMPORT SCSS file
import './index.scss';

// ----------------------------------------------------------------------
import config from './index.config';
import runFunction from './index.run';
import services from './services/_services.module';
// ----------------------------------------------------------------------
import componentsModule from './components/components.module';

// EXAMPLE HOW TO SEPARATE FILES
import commonModule from './common/common.module';

angular
    .module('rubyTest', [
        'ngTouch',
        'ngAnimate',
        'ui.router',
        'ngSanitize',
        commonModule,
        componentsModule,
        services
    ])
    .config(config)
    .run(runFunction);
