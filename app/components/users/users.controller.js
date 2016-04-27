(function () {
    'use strict';
   /* class UsersController {
        constructor($scope, $timeout) {
            this.saludo = "lol"

            console.log('this');
            console.log(this);
        }

        // Metodos de la clase
    }*/

    function UsersController($scope, $timeout) {
        this.saludo = "lol";

        console.log('this');
        console.log(this);
    }

    UsersController.$inject = ['$scope','$timeout'];

    angular.module('app.component.users').controller('UsersController', UsersController);

}());