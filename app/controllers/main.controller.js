'use strict';

angular
    .module('app')
    .controller('DebugCtrl', DebugCtrl);
    
DebugCtrl.$inject = ['$scope'];

function DebugCtrl($scope) { 
    
    var vm = this;
    $scope.name = 'Sebastian';
    $scope.cars = ['bwm', 'tesla', 'audi', 'volvo'];
    
    $scope.activate = activate;
    
    activate();
    
    function activate() {
    };
}