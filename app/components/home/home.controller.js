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

    function HomeController($scope, $timeout) {
        console.log('this');
        console.log(this);
    }

    HomeController.$inject = ['$scope','$timeout'];

    angular.module('app.component.home').controller('HomeController', HomeController);

}());