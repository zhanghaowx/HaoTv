/* global describe, it, expect, beforeEach, afterEach, module, inject, browser, element, by */
'use strict';

/* https://github.com/angular/protractor/blob/master/docs/toc.md */

describe('Hao Tv App', function () {

    browser.get('index.html');

    it('should automatically redirect to /dashboard when location hash/fragment is empty', function () {
        expect(browser.getLocationAbsUrl()).toMatch("/dashboard");
    });


    describe('dashboard', function () {

        beforeEach(function () {
            browser.get('index.html#/dashboard');
        });


        it('should render dashboard when user navigates to /dashboard', function () {
            expect(element.all(by.css('[ng-view] p')).first().getText()).
            toMatch(/partial for view 2/);
        });

        it('should fire DashboardController when user navigates to /dashboard', function () {
            expect(element.all(by.css('[ng-view] p:nth-child(2)')).first().getText()).
            toMatch(/hey this is ctrl2/);
        });
    });
});