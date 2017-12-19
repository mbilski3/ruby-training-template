import {
    dashComponent
} from './dash.component';
import dashComponentConfig from './dash.route';
// ----------------------------------------------------------------------
export default angular.module('rubyTest.dashModule', [])
    .component('dashComponent', dashComponent)
    .config(dashComponentConfig)
    .name
