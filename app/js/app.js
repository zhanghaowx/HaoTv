// Add format function to String
if (!String.prototype.format) {
    String.prototype.format = function () {
        var args = arguments;
        return this.replace(/{(\d+)}/g, function (match, number) {
            return typeof args[number] != 'undefined' ? args[number] : match;
        });
    };
}

define([
    'angular',
    'angularRoute',
    'view/dashboard/dashboard',
], function (angular, angularRoute) {
    // Declare app level module which depends on views, and components
    var appModule = angular.module('HaoTv', [
        'ngRoute',
        'HaoTv.dashboard',
    ]).config(['$routeProvider', function ($routeProvider) {
        $routeProvider.otherwise({
            redirectTo: '/dashboard'
        });
    }]);

    var appProperties = {
        REVISION: '1',
        GOOGLE_API_KEY: "AIzaSyBWgdmfioUHz9At-uL9MZQnL_PpHo-55yA"
    };

    var HaoTv = {};
    for (var attrib in appModule) {
        HaoTv[attrib] = appModule[attrib];
    }
    for (var attrib in appProperties) {
        HaoTv[attrib] = appProperties[attrib];
    }

    return HaoTv;
});