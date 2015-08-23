/*global module, inject */
'use strict';

define(['app', 'angularMocks'], function (app) {
    describe('HaoTv.dashboard module', function () {
        beforeEach(module('HaoTv.dashboard'));

        describe('dashboard controller', function () {
            it('should exist', inject(function ($controller) {
                //spec body
                var DashboardController = $controller('DashboardController', {
                    $scope: {
                        $on: function () {}
                    }
                });
                expect(DashboardController).toBeDefined();
            }));
        });
    });
});
