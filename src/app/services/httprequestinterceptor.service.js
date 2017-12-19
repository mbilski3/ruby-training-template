export class httpRequestInterceptor {
    constructor($q, $rootScope) {
        'ngInject';

        this.$q = $q;
        this.$rootScope = $rootScope;
        ////////////////
        this.request = (config) => {
            config.headers = config.headers || {};
            return config;
        }

        this.response = (response) => {
            if (response.status === 403) {
                this.$rootScope.$emit('rubyTest:logout', response);
            }
            return response || this.$q.when(response);
        }

        this.responseError = (rejection) => {
            return this.$q.reject(rejection);
        }
    }
}
