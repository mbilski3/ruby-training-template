export default function runFunction($rootScope, $state) {
    'ngInject';

    $rootScope.$on('$stateChangeStart', (event, toState, toParams, fromState) => {
        console.log(toState)
    });
}