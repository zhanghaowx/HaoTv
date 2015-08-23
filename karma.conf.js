/* global module */
"use strict";

module.exports = function (config) {
    config.set({
        basePath: './',
        files: [
            {
                pattern: 'app/bower_components/angular/angular.js',
                included: false
            },
            {
                pattern: 'app/bower_components/angular-mocks/angular-mocks.js',
                included: false
            },
            {
                pattern: 'app/bower_components/angular-ui-router/release/angular-ui-router.js',
                included: false
            },
            {
                pattern: 'app/bower_components/oclazyload/dist/ocLazyLoad.js',
                included: false
            },
            {
                pattern: 'app/js/components/**/*.js',
                included: false
            },
            {
                pattern: 'app/js/**/!(require-config).js',
                included: false
            },
            {
                pattern: 'app/view/**/*.js',
                included: false
            },
            // needs to be last http://karma-runner.github.io/0.12/plus/requirejs.html
            'app/js/require-config.js'
        ],
        autoWatch: true,
        browsers: ['Chrome_no_sandbox'],
        customLaunchers: {
            Chrome_no_sandbox: {
                base: 'Chrome',
                flags: ['--no-sandbox']
            }
        },
        logLevel: config.LOG_DEBUG,
        frameworks: ['jasmine', 'requirejs'],
        plugins: [
            'karma-coveralls',
            'karma-jasmine',
            'karma-coverage',
            'karma-requirejs',
            'karma-junit-reporter',
            'karma-chrome-launcher',
            'karma-firefox-launcher'
        ],
        preprocessors: {
            'app/js/**/*.js': ['coverage'],
            'app/view/**/*.js': ['coverage']
        },
        reporters: ['progress', 'coverage', 'coveralls'],
        coverageReporter: {
            type: 'lcov',
            dir: 'coverage/'
        }
    });
};
