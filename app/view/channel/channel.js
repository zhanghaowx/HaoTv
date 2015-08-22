'use strict';
define([
    'angular',
    'angularUiRoute',
    'client/youtube'
], function (angular, angularUiRoute, HaoTv) {
    angular
        .module('HaoTv.channel', ['ui.router'])
        .config(function ($stateProvider, $urlRouterProvider) {
            $stateProvider.state('channel', {
                url: '/channel/{channelId}',
                title: 'Channel',
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
                        templateUrl: 'view/channel/channel.html',
                        controller: 'ChannelController'
                    }
                }
            });
        })
        .controller('ChannelController', ['$scope', '$http',
            function ($scope, $http) {
                // initialize
                $scope.channels = [];

                // query Parse to get all channel ids
                var query = new Parse.Query(Parse.Object.extend("Channel"));
                query.find({
                    success: function (results) {
                        var channelId = channel.get('referenceId');
                        var youtube = new HaoTv.Youtube($http);
                        youtube.getChannel(channelId, function (channel) {
                            $scope.channel = channel;
                        })
                    }
                });
        }]);
});
