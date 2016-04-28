(function () {
    'use strict';

    class HomeService {
        constructor($q, $http) {
            this.$q = $q;
            this.$http = $http;
        }

        getHome() {
            return this.$http({
                method: 'GET',
                url: "http://localhost:4000/api/v1/home",
                headers : {
                    'Accept': 'Application/json'
                }
            }).then(function (response) {
                return response;
            },function (error) {
                return error;
            });
        }
    }

    HomeService.$inject = ['$q', '$http'];

    angular.module('app.component.home').service('HomeService', HomeService);

}());