import './navbar.scss';
export const navBar = {
    template: require('./navbar.component.html'),
    controller: class NavBar {
        constructor() {
            'ngInject';

        }

        $onInit() {}
        $onChanges(changesObj) {
            console.log(changesObj)
        }
        $onDestory() {}

    }

}