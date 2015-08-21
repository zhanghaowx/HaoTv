'use strict';
define([
    'angular',
    'angularUiRoute',
    'client/youtube'
], function (angular, angularUiRoute, HaoTv) {
    angular
        .module('HaoTv.dashboard', ['ui.router'])
        .config(function ($stateProvider, $urlRouterProvider) {
            $stateProvider.state('dashboard', {
                url: '/dashboard',
                views: {
                    'header': {
                        templateUrl: 'view/include/header.html',
                    },
                    'sidebar': {
                        templateUrl: 'view/include/sidebar.html',
                    },
                    'footer': {
                        templateUrl: 'view/include/footer.html',
                    },
                    'content': {
                        templateUrl: 'view/dashboard/dashboard.html',
                        controller: 'DashboardController'
                    }
                }
            });
        })
        .controller('DashboardController', ['$scope', '$http', function ($scope, $http) {
            var youtube = new HaoTv.Youtube($http);
            youtube.getVideo("UCQCWWi59utXQ5QdaL38LHqA").then(function (response) {
                $scope.title = "Dashboard"
                $scope.channel = youtube.parseResponse(response.data);
            });
        }]);
});
