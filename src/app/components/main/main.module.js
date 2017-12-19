import {
    mainComponent
} from './main.component';

import mainComponentConfig from './main.route';
// ----------------------------------------------------------------------
export default angular.module('rubyTest.mainModule', [])
    .component('mainComponent', mainComponent)
    .config(mainComponentConfig)
    .name
