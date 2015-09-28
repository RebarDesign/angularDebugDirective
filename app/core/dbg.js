(function() {

    'use strict';
    
    angular
        .module('app.dbg', [])
        .run(function (){
            var debugMode = false;
            
            if (debugMode) {
                
                $('[ng-controller]').addClass('dbg-ctrl');
                $('[data-ng-controller]').addClass('dbg-ctrl');
                $('[ng-include]').addClass('dbg-include');
                $('[data-ng-include]').addClass('dbg-include');
                $('[ng-view]').addClass('dbg-view');
                $('[data-ng-view]').addClass('dbg-view');
                $('[ng-app]').addClass('dbg-app');
                $('[data-ng-app]').addClass('dbg-app');
            }
        }(jQuery));
})();
    