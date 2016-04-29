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

    function UsersController($scope, $timeout, UsersService) {

        var self = this;
        console.log('this');
        console.log(this);
        self.checkedUsersArray = [];

        self.deleteUser = function (user) {
            UsersService.deleteUser(user).then( ({data}) => self.deleteRespose = data );
            UsersService.getUsers();
        };
        
        self.checkUsers = function (user) { 
            if (self.usersList[user.id].is_marked === true) {
                self.usersList.splice(self.usersList[user.id]);
            }
            // if (self.checkboxUser === true) {
            //     self.checked_users.push(user);
            // }
            // // } else {
            // //     self.checked_users.splice(user);
            // // }
            console.log(self);
            console.log(self.checkBoxUser);
        };

    }


    UsersController.$inject = ['$scope','$timeout', 'UsersService'];

    angular.module('app.component.users').controller('UsersController', UsersController);

}());