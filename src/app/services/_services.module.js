import {
    httpRequestInterceptor
} from './httprequestinterceptor.service';

// ----------------------------------------------------------------------
module.exports = angular
    .module('rubyTest.services', [])
    .service('httpRequestInterceptor', httpRequestInterceptor)
    .name;
