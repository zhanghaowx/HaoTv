HaoTv = {
    REVISION: '1',
    GOOGLE_API_KEY: "AIzaSyBWgdmfioUHz9At-uL9MZQnL_PpHo-55yA"
};

define(['angularAMD', 'angular-route'], function () {
    // Add format function to String
    if (!String.prototype.format) {
        String.prototype.format = function () {
            var args = arguments;
            return this.replace(/{(\d+)}/g, function (match, number) {
                return typeof args[number] != 'undefined' ? args[number] : match;
            });
        };
    }
    // Start AngularJs App
    var app = angular.module('HaoTvApp', ['ngRoute']);
    app.config(function ($routeProvider) {
        $routeProvider
            .when("/", angularAMD.route({
                templateUrl: 'index.html',
                controller: 'ChannelController',
            }))
            .otherwise({
                redirectTo: "/"
            });
    });

    // Define controllers
    var haoTvApp = angularAMD.bootstrap(app);
    haoTvApp.controller('ChannelController', ['$scope',
        function ($scope) {
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

    return HaoTv;
});