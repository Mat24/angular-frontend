(function () {
    'use strict';

    angular.module('app.component.users').directive('usersForm', usersForm);

    usersForm.$inject = [];
    
    function usersForm() {
        return {
            scope: {},
            name: 'ctrl',
            controller: '@',
            controllerAs: '$ctrl',
            templateUrl: 'components/users/components/usersForm/usersForm.html',
            link: function ($scope, $element, $attrs, $ctrl) {

            }
        };
    }
    
}());