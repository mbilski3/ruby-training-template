export default function loginComponentConfig($httpProvider, $locationProvider, $interpolateProvider, $stateProvider) {
    'ngInject';
    $stateProvider.state('login', {
        url: '^/login-page',
        template: '<login-component></login-component>'
    });
}
