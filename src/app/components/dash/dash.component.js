export const dashComponent = {
    bindings: {},
    template: require('./dash.html'),
    controller: class DashController {
        constructor($rootScope) {
            'ngInject';           
        }
        someFunction(){
            console.log(`i'm on login page !!!`)
        }

        $onInit() {
            // 
        }
        $onChanges(changesObj) {
            // 
        }
        $onDestroy() {}        
    }
};
