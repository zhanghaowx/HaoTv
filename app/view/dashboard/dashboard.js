'use strict';
define([
    'angular',
    'angularRoute',
    'client/youtube',
    'components/version/version'
], function (angular, angularRoute, HaoTv) {
    angular
        .module('HaoTv.dashboard', ['ngRoute', 'HaoTv.version'])
        .config(['$routeProvider', function ($routeProvider) {
            $routeProvider.when('/dashboard', {
                templateUrl: 'view/dashboard/dashboard.html',
                controller: 'DashboardController'
            });
        }])
        .controller('DashboardController', ['$scope', '$http', function ($scope, $http) {
            var youtube = new HaoTv.Youtube($http);
            youtube.getVideo("UCNAOHisAVbp5ANqZDKLKtIw").then(function (response) {
                $scope.channel = youtube.parseResponse(response.data);
            });
        }]);
});