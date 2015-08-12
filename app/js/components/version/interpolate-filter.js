'use strict';

define(['angular'], function (angular) {
    angular.module('HaoTv.version.interpolate-filter', [])
        .filter('interpolate', ['version', function (version) {
            return function (text) {
                return String(text).replace(/\%VERSION\%/mg, version);
            };
        }]);
});