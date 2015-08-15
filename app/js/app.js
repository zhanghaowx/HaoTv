'use strict';

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
    var app = angular.module('HaoTv', [
            'ngRoute',
            'HaoTv.version',
            'HaoTv.dashboard'
        ]);
    app.config(['$routeProvider', function ($routeProvider) {
        $routeProvider.otherwise({
            redirectTo: '/dashboard'
        });
    }]);
    // UI components: Header, Footer, Sidebar, ... , etc.
    app.controller('HeaderController', ['$scope', function ($scope) {
        $scope.$on('$includeContentLoaded', function () {
            Layout.init(); // init header
        });
    }]);
    return app;
});
