'use strict';
define([
    'angular',
    'angularUiRouter',
    'client/youtube'
], function (angular) {
    angular
        .module('HaoTv.channel', ['ui.router'])
        .config(function ($stateProvider, $urlRouterProvider) {
            $stateProvider.state('home.channel', {
                url: '/channel/{id}',
                title: 'Channel',
                templateUrl: 'view/channel/channel.html',
                controller: 'ChannelController'
            });
        })
        .controller('ChannelController', ['$scope', '$stateParams', '$http',
            function ($scope, $stateParams, $http) {
                var channelId = $stateParams.id;

                var query = new Parse.Query(Parse.Object.extend("Channel"));
                query.equalTo("referenceId", channelId);
                query.find({
                    success: function (results) {
                        var source = results[0].get("source");
                        switch (source) {
                        case "youtube":
                            {
                                var youtube = new HaoTv.Youtube($http);
                                youtube.getVideo(channelId, function (channel) {
                                    $scope.channel = channel;
                                });
                            }
                            break;
                        }
                    },
                    error: function (object, error) {
                        console.log(error);
                    }
                });
        }]);
});
