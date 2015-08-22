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
    'angularUiRoute',
    'parse',
    'components/version/version',
    'view/dashboard/dashboard',
    'view/channel/channel',
    'view/login/login'
], function (angular) {

    Parse.initialize("LOYwfCogZm31uTz2PqLf4Chn4aBTNwBLfdsXWcdz", "KAthIVo7eU6VwPuhGKPZFbCwwxcA2tbY7v649YTn");

    /**
     * Declare app level module which depends on views, and components
     * - Steps to add a new page:
     * 1. add page's js file to above dependency list
     * 2. add page's module name to below dependency list
     * 3. In page's js file, configure $stateProvider
     */
    var app = angular.module('HaoTv', [
            'ui.router',
            'HaoTv.version',
            'HaoTv.dashboard',
            'HaoTv.channel',
            'HaoTv.login'
        ]);
    app.config(function ($stateProvider, $urlRouterProvider) {
        $urlRouterProvider.otherwise('/pagenotfound');
        $stateProvider.state('pagenotfound', {
            title: 'Page not found'
        });
    });
    app.run(['$rootScope', '$state', '$stateParams',
        function ($rootScope, $state, $stateParams) {
            $rootScope.$state = $state;
            $rootScope.$stateParams = $stateParams;
        }
    ]);

    return app;
});
