'use strict';
define([
    'angular',
    'angularUiRoute',
    'client/youtube'
], function (angular, angularUiRoute, HaoTv) {
    angular
        .module('HaoTv.dashboard', ['ui.router'])
        .config(function ($stateProvider, $urlRouterProvider) {
            $stateProvider.state('home.dashboard', {
                url: '/dashboard',
                title: 'Dashboard',
                templateUrl: 'view/dashboard/dashboard.html',
                controller: 'DashboardController'
            });
        })
        .controller('DashboardController', ['$scope', '$http',
            function ($scope, $http) {
                // initialize
                $scope.channels = [];
                $scope.$on('$viewContentLoaded', function (event) {
                    Metronic.init(); // init metronic core componets
                    Layout.init(); // init layout
                });

                // query Parse to get all channel ids
                var query = new Parse.Query(Parse.Object.extend("Channel"));
                query.find({
                    success: function (results) {
                        // create all possible clients
                        var youtube = new HaoTv.Youtube($http);
                        // get channel information for each channel
                        for (var i in results) {
                            var channel = results[i];

                            switch (channel.get('source')) {
                            case 'youtube':
                                {
                                    var channelId = channel.get('referenceId');
                                    youtube.getChannel(channelId, function (channel) {
                                        $scope.channels.push(channel);
                                    });
                                }
                                break;
                            }
                        }
                    }
                });
        }]);
});
