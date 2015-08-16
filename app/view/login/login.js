'use strict';
define([
    'angular',
    'angularRoute'
], function (angular, angularRoute, HaoTv) {
    angular
        .module('HaoTv.login', ['ngRoute'])
        .config(['$routeProvider', function ($routeProvider) {
            $routeProvider.when('/login', {
                templateUrl: 'view/login/login.html',
                controller: 'LoginController'
            });
        }])
        .controller('LoginController', ['$scope', '$http', function ($scope, $http) {
            $scope.$on('$viewContentLoaded', function () {
                Metronic.init(); // init metronic core components
                Layout.init(); // init current layout
                Login.init();
                Demo.init();
            });
        }]);
});
