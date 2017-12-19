export default function mainComponentConfig($httpProvider, $locationProvider, $interpolateProvider, $stateProvider) {
    'ngInject';
    $stateProvider.state('main', {
        url: '',
        abstract: true,
        template: '<main-component></main-component>',       
    });
}