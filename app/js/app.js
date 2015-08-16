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
    'components/version/version',
    'view/dashboard/dashboard',
    'view/login/login'
], function (angular, angularRoute, dashboardView) {
    /**
     * Declare app level module which depends on views, and components
     * - Steps to add a new page:
     * 1. add page's js file to above dependency list
     * 2. add page's module name to below dependency list
     * 3. In page's js file, configure $routeProvider
     */
    var app = angular.module('HaoTv', [
            'ngRoute',
            'HaoTv.version',
            'HaoTv.dashboard',
            'HaoTv.login'
        ]);
    app.config(['$routeProvider', function ($routeProvider) {
        $routeProvider.otherwise({
            redirectTo: '/dashboard'
        });
    }]);
    /*
     * Layout Partials.
     * By default the partials are loaded through AngularJS ng-include directive. In case they loaded in server side(e.g: PHP include function) then below partial
     * initialization can be disabled and Layout.init() should be called on page load complete as explained above.
     */
    app.controller('HeaderController', ['$scope', function ($scope) {
        $scope.$on('$includeContentLoaded', function () {
            //Layout.initHeader(); // init header
        });
    }]);
    app.controller('FooterController', ['$scope', function ($scope) {
        $scope.$on('$includeContentLoaded', function () {
            //Layout.initFooter(); // init footer
        });
    }]);
    app.controller('SidebarController', ['$scope', function ($scope) {
        $scope.$on('$includeContentLoaded', function () {
            //Layout.initSidebar(); // init sidebar
        });
    }]);

    return app;
});
