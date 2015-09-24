angular.module('app')
  .factory('DebugFactory', DebugFactory);
  
  
DebugFactory.$inject = [];

function DebugFactory () {
	
	var debugMode = false;
	
	var service = {

		debugUI 		: debugUI,
		debugConsole 	: debugConsole,
		debugLog 		: debugLog
	};
	
	return service;
	
	//////////////////////
	
	function debugUI(){
		
	}
	
	function debugConsole(){
		
	}
	
	function debugLog(){
		
	}
	
}