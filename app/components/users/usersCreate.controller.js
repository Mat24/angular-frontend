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

    function UsersCreateController($scope, $timeout, UsersService) {
        var self = this;
        self.users = {};

        console.log('this');
        console.log(this);

        // Metodos
        self.createUser = function () {
            UsersService.createUser(self.users).then(({data}) => self.response = data)
        }
    }

    UsersCreateController.$inject = ['$scope','$timeout', 'UsersService'];

    angular.module('app.component.users').controller('UsersCreateController', UsersCreateController);

}());