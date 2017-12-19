export const mainComponent = {
    template: require('./main.html'),
    bindings: {},
    controller: class MainComponent {
        constructor() {
            'ngInject';

        }
        // ---------------------------------------------------
        // HELPERS
        // ---------------------------------------------------

        $onInit() {}
        $onChanges(changesObj) {}
        $onDestory() {}
    }
};