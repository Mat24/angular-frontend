(function () {
    'use strict';
   /* class UsersCreateController {
        constructor($scope, $timeout) {
            this.saludo = "lol"

            console.log('this');
            console.log(this);
        }

        // Metodos de la clase
    }*/

    function UsersCreateController($scope, $timeout, UsersService, $state) {
        var self = this;
        self.users = {};

        console.log('this');
        console.log(this);

        // Metodos
        self.createUser = function () {
            UsersService.createUser(self.users).then(({data}) => {
            self.response = data;
                $state.go('users');
            });

        }
    }

    UsersCreateController.$inject = ['$scope','$timeout', 'UsersService', '$state'];

    angular.module('app.component.users').controller('UsersCreateController', UsersCreateController);

}());