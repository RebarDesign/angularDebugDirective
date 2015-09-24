(function() {
    'use strict';
    
    angular
        .module('app')
        .controller('DebugCtrl', DebugCtrl);
        
    DebugCtrl.$inject = ['$scope'];
    
    function DebugCtrl($scope) { 
        
        var vm = this;
        
        vm.activate = activate;
        vm.name = 'Sebastian';
        vm.search = '';
        vm.cars = ['bwm', 'tesla', 'audi', 'volvo'];
        
        activate();
        
        function activate() {
        };
    }

})();