(function () {
    'use strict';
    
    var users = {
        controller: 'UsersController',
        controllerAs: '$ctrl',
        bindings: {
            usersList: '='
        },
        templateUrl: 'components/users/users.html'
    };
    
    users.$inject = [];
    
    angular.module('app.component.users').component('users', users);
}());