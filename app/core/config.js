(function() {

    'use strict';
    
    angular
        .module('app.core', [])
        .value('appValue', appValue)
        .config(['$compileProvider', function config($compileProvider) {
            //  Angular debug mode
            $compileProvider.debugInfoEnabled(true);
        }])
    
    var appValue = {
        appErrorPrefix: '[NG-Modular Error] ', //Configure the exceptionHandler decorator
        appTitle: 'Angular Debug Directive',
        version: '0.0.1'
    };
    
})();
    