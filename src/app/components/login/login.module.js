import {
    loginComponent
} from './login.component';
import loginComponentConfig from './login.route';
// ----------------------------------------------------------------------
export default angular.module('rubyTest.loginModule', [])
    .component('loginComponent', loginComponent)
    .config(loginComponentConfig)
    .name
