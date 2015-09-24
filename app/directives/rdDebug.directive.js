(function() {

    'use strict';
    
    /**
    * @desc debug directive that runs through elements looking for ng-model properties
    * @example <div rd-debug></div>
    */
    
    angular
        .module('app')
        .directive('rdDebug', rdDebug);
        
        rdDebug.$inject = [];
        
        
        function rdDebug() { 
        
        var directive = {   
            link : link,
            controller: 'DebugCtrl',
            controllerAs: 'vm',
            bindToController: true // because the scope is isolated
        };
        
        return directive;
        
        ////////////////////////////
        ////////////////////////////
        
        
        function link (scope, element, attr , vm) {
            
            // returns an array whose elements are strings corresponding to the object scope. 
            var scopeProperties = Object.keys(scope.vm);
            // debugger;
            
            console.info('performing error search');
            
            var modelElements = $(element).find('[ng-model]');
            console.info('found ' + modelElements.length + ' model elements');
            
            angular.forEach(modelElements, function (me) {
            var modelAttr = $(me).attr('ng-model');
            
            console.info('=>', modelAttr);
            
            if (_.some(scopeProperties, function(prop) { 
            
            // TODO Find a more elegant solution to remove 'vm.'
            return prop == modelAttr.slice(3);; 
            })) {
                console.info('scope value for', modelAttr, '=', scope[modelAttr]);
                } else {
                    
                    var error = 'missing property in scope: ' + modelAttr;
                    
                    $(me)
                        .addClass( "tooltipped")  
                        .css({ 'border': "1px solid red" })
                        .attr({
                            "data-position": "right",
                            "data-delay" : "50",
                            "data-tooltip" : error
                        });              
                    
                    console.error(error);
                }
            });
            
            // get all comments
            var comments = $(element).find('*').contents().filter(function () {
                return this.nodeType == 8;
            });
            console.info('found ' + comments.length + ' comment elements, searching for repeats');
            
            angular.forEach(comments, function (com) {
                var commentparts = com.nodeValue.split(' ');
                if (commentparts.length < 4) return;
                var scopeVariable = commentparts[4];
                console.info(scopeVariable);
        
                if (!_.some(scopeProperties, function(prop) { return prop == scopeVariable; })) {
                    console.error('missing property in scope:', scopeVariable, ',', com.nodeValue);
                }
            });
            
        };
            
    }

})();