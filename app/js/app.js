// Add format function to String
if (!String.prototype.format) {
    String.prototype.format = function () {
        var args = arguments;
        return this.replace(/{(\d+)}/g, function (match, number) {
            return typeof args[number] !== 'undefined' ? args[number] : match;
        });
    };
}

define([
    'angular',
    'angularRoute',
    'view/dashboard/dashboard'
], function (angular, angularRoute, dashboardView) {
    // Declare app level module which depends on views, and components
    return angular.module('HaoTv', [
            'ngRoute',
            'HaoTv.dashboard'
        ])
        .config(['$routeProvider', function ($routeProvider) {
            $routeProvider.otherwise({
                redirectTo: '/dashboard'
            });
    }]);
});