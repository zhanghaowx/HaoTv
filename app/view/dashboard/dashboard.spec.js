/*global module, inject */
'use strict';

define(['app', 'angularMocks'], function (app) {
    describe('HaoTv.dashboard module', function () {
        beforeEach(module('HaoTv.dashboard'));

        describe('dashboard controller', function () {
            it('should ....', inject(function ($controller) {
                //spec body
                var view1Ctrl = $controller('DashboardController');
                expect(DashboardController).toBeDefined();
            }));
        });
    });
});