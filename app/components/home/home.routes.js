(function () {
    'use strict';

    angular.module('app.component.home').config(config);

    config.$inject = ['$stateProvider','$urlRouterProvider'];

    function config($stateProvider, $urlRouterProvider) {
        $urlRouterProvider.otherwise('/home');

        $stateProvider.state('home',{
            url: '/home',
            controller: ['home', function (home) {
                console.log(home);
                this.home = home;
            }],
            controllerAs: 'homeCtrl',
            template: '<home home-board="homeCtrl.home"></home>',
            resolve: {
                home: ['HomeService', function (HomeService) {
                    return HomeService.getHome().then(({data}) => data)
                }]
            }

        });

    }

}());