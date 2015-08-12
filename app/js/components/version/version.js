'use strict';

define(['angular', 'components/version/version-directive', 'components/version/interpolate-filter'],
function (angular, versionDirective, interpolateFilter) {
    angular.module('HaoTv.version', [
            'HaoTv.version.interpolate-filter',
            'HaoTv.version.version-directive'
        ])
        .value('version', '0.3');
});