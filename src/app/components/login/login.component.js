export const loginComponent = {
    bindings: {},
    template: require('./login.html'),
    controller: class LoginController {
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
