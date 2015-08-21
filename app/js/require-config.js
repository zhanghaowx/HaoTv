'use strict';

if (window.__karma__) {
    var allTestFiles = [];
    var TEST_REGEXP = /spec\.js$/;

    var pathToModule = function (path) {
        return path.replace(/^\/base\/app\/js\//, '')
            .replace(/^\/base\/app\//, '')
            .replace(/\.js$/, '');
    };

    Object.keys(window.__karma__.files).forEach(function (file) {
        if (TEST_REGEXP.test(file)) {
            // Normalize paths to RequireJS module names.
            allTestFiles.push(pathToModule(file));
        }
    });
}

require.config({
    paths: {
        angular: '../bower_components/angular/angular',
        angularRoute: '../bower_components/angular-route/angular-route',
        angularMocks: '../bower_components/angular-mocks/angular-mocks',
        bootstrap: '../bower_components/bootstrap/dist/js/bootstrap',
        jquery: '../bower_components/jquery/dist/jquery',
        jqueryUi: '../bower_components/jquery-ui/jquery-ui',
        parse: 'http://www.parsecdn.com/js/parse-1.5.0.min',
        text: '../bower_components/requirejs-text/text',
        view: '../view'
    },
    shim: {
        'angular': {
            exports: 'angular'
        },
        'angularRoute': ['angular'],
        'angularMocks': {
            deps: ['angular'],
            exports: 'angular.mock'
        },
        'bootstrap': {
            deps: ['jqueryUi'],
            exports: 'bootstrap'
        },
        'jquery': {
            exports: 'jquery'
        },
        'jqueryUi': {
            deps: ['jquery'],
            exports: 'jquery.ui'
        }
    },
    priority: ["angular"],
    deps: window.__karma__ ? allTestFiles : [],
    callback: window.__karma__ ? window.__karma__.start : null,
    baseUrl: window.__karma__ ? '/base/app/js' : 'js'
});

require([
    'angular',
    'app'
], function (angular, app) {
    var $html = angular.element(document.getElementsByTagName('html')[0]);
    angular.element().ready(function () {
        // bootstrap the app manually
        angular.bootstrap(document, ['HaoTv']);
    });
});
