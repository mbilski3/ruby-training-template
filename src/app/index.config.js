export default function config($httpProvider, $locationProvider, $interpolateProvider, $stateProvider, $urlRouterProvider) {
    'ngInject';
    // ENABLE HTML5 MODE IN FUTURE !!!
    $locationProvider.html5Mode({
        // requireBase: false,
        // enabled: true
    });

    // $httpProvider.interceptors.push('httpRequestInterceptor');
    // $httpProvider.defaults.withCredentials = true;
    // $urlRouterProvider.otherwise('/');
}