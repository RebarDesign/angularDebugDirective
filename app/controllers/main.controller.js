'use strict';

angular
    .module('app')
    .controller('ACtrl', ACtrl);
    
ACtrl.$inject = ['$scope'];

function ACtrl($scope) { 
    
    var vm = this;
    $scope.name = 'world';
    $scope.fruits = ['banana', 'orange', 'apple', 'mango'];
    
    $scope.activate = activate;
    
    activate();
    
    function activate() {
    };
}