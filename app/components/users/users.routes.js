(function () {
    'use strict';

    angular.module('app.component.users').config(config);

    config.$inject = ['$stateProvider','$urlRouterProvider'];

    function config($stateProvider, $urlRouterProvider) {
        $urlRouterProvider.otherwise('/');

        $stateProvider.state('users',{
            url: '/users',
            controller: ['users', function (users) {
                console.log(users);
                this.users = users;
            }],
            controllerAs: 'usersCtrl',
            template: '<users users-list="usersCtrl.users"></users>',
            resolve: {
                users: ['UsersService', function (UsersService) {
                    return UsersService.getUsers().then(({data}) => data)
                }]
            }

        });

    }

}());