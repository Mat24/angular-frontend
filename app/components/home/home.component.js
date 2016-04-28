(function () {
    'use strict';
    
    var home = {
        controller: 'HomeController',
        bindings: {
            homeBoard: '='
        },
        controllerAs: '$ctrl',
        templateUrl: 'components/home/home.html'
    };
    
    home.$inject = [];
    
    angular.module('app.component.home').component('home', home);
}());