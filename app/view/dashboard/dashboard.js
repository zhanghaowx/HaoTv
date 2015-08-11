'use strict';
define([
    'angular',
    'angularRoute'
], function (angular) {




    angular
        .module('HaoTv.dashboard', ['ngRoute'])
        .config(['$routeProvider', function ($routeProvider) {
            $routeProvider.when('/dashboard', {
                templateUrl: 'view/dashboard/dashboard.html',
                controller: 'DashboardController'
            });
        }])
        .controller('DashboardController', ['$scope', function ($scope) {
            $scope.channel = {
                videos: [
                    {
                        title: "video 1"
                    },
                    {
                        title: "video 2"
                    }
                ]
            };
        }]);
});