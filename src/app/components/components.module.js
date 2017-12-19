// PUT ES6 COMPONENTS HERE
// ----------------------------------------------------------------------

// MAIN
import mainModule from './main/main.module';
// LOGIN
import loginModule from './login/login.module';
// DASH
import dashModule from './dash/dash.module';

// ----------------------------------------------------------------------
export default angular.module('rubyTest.componentsModule', [
    mainModule,   
    loginModule,
    dashModule
]).name
