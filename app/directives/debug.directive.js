'use strict';

angular
    .module('app')
    .directive('debug', debug);
    

function debug() { 
    
    var directive = {
        link : link
    };
    
    function link (scope, element, attr) {
        
        // returns an array whose elements are strings corresponding to the object scope. 
        var scopeProperties = Object.keys(scope);
        // debugger;
        
        console.info('performing error search');
        
        var modelElements = $(element).find('[ng-model]');
        console.info('found ' + modelElements.length + ' model elements');
        
        angular.forEach(modelElements, function (me) {
        $(me).attr("style", "border:1px solid red");
        var modelAttr = $(me).attr('ng-model');
        console.info('=>', modelAttr);
        
        if (_.some(scopeProperties, function(prop) { return prop == modelAttr; })) {
            console.info('scope value for', modelAttr, '=', scope[modelAttr]);
            } else {
                console.error('missing property in scope: ', modelAttr);
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
        
    return directive;
}
