'use strict';

angular
    .module('app')
    .controller('DebugCtrl', DebugCtrl);
    
DebugCtrl.$inject = ['$scope'];

function DebugCtrl($scope) { 
    
    var vm = this;
    
    vm.name = 'Sebastian';
    vm.cars = ['bwm', 'tesla', 'audi', 'volvo'];
    vm.activate = activate;
    
    activate();
    
    function activate() {
    };
}