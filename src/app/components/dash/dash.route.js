export default function dashComponentConfig($httpProvider, $locationProvider, $interpolateProvider, $stateProvider) {
    'ngInject';
    $stateProvider.state('dash', {
        url: '^/dash',
        template: '<dash-component></dash-component>'
    });
}
