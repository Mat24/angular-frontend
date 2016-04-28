(function () {
    'use strict';

    class UsersService {
        constructor($q, $http) {
            this.$q = $q;
            this.$http = $http;
        }

        getUsers() {
            return this.$http({
                method: 'GET',
                url: "http://localhost:4000/api/v1/users",
                headers : {
                    'Accept': 'Application/json'
                }
            }).then(function (response) {
                return response;
            },function (error) {
                return error;
            });
        }
        
        createUser(user) {
            return this.$http({
               method: 'POST',
                url: 'http://localhost:4000/api/v1/users',
                data: {
                    user
                },
                headers: {
                    'Accept' : 'Application/json',
                    'Content-Type' : 'Application/json'
                }
            }).then(function (response) {
                return response;
            }).then(function (error) {
                return error;
            })
        }
    }

    UsersService.$inject = ['$q', '$http'];

    angular.module('app.component.users').service('UsersService', UsersService);

}());