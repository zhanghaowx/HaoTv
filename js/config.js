// For any third party dependencies, like jQuery, place them in the lib folder.
requirejs.config({
    //By default load any module IDs from src
    baseUrl: 'js',
    //paths config is relative to the baseUrl, and
    //never includes a ".js" extension since
    //the paths config could be for a directory.
    paths: {
        lib: 'lib',
        client: 'client',
        video: 'video',
        // Must set 'angular'
        'angular': '//ajax.googleapis.com/ajax/libs/angularjs/1.2.16/angular',
        'angular-route': '//ajax.googleapis.com/ajax/libs/angularjs/1.2.16/angular-route.min',
        'angularAMD': '//cdn.jsdelivr.net/angular.amd/0.2.0/angularAMD.min'
    },
    //Remember: only use shim config for non-AMD scripts,
    //scripts that do not already call define(). The shim
    //config will not work correctly if used on AMD scripts,
    //in particular, the exports and init config will not
    //be triggered, and the deps config will be confusing
    //for those cases.
    shim: {
        // Add angular modules that does not support AMD out of the box, put it in a shim
        'angularAMD': ['angular'],
        'angular-route': ['angular']
    },

    // kick start application
    deps: ['app']
});