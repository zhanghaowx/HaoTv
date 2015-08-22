'use strict';
define([
    'angular',
    'angularUiRoute'
], function (angular) {
    angular
        .module('HaoTv.login', ['ui.router'])
        .config(function ($stateProvider, $urlRouterProvider) {
            $stateProvider.state('login', {
                url: '/login',
                title: 'Login',
                views: {
                    'content': {
                        templateUrl: 'view/login/login.html',
                        controller: 'LoginController'
                    }
                }
            });
        })
        .controller('LoginController', ['$scope', '$http', function ($scope, $http) {
            $scope.$on('$viewContentLoaded', function () {
                Metronic.init(); // init metronic core components
                Layout.init(); // init current layout
                Login.init();
                Demo.init();
            });
        }]);
});
