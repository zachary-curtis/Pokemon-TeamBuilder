/**
 *  Base file for front end
 */


var app = angular.module("main", ['ngRoute', 'ui.bootstrap']);

	app.config(['$routeProvider', function($routeProvider){
	
		$routeProvider.
		when('/home', {
			templateUrl : 'home.html'
		}).
		when('/createPokemonBuild', {
			templateUrl : 'createPokemonBuild.html'
		})
/*		when('/home', {
			templateUrl : 'home.html'
		}). //<--- dot goes here for chaining
		
*/
		
	}]);	// end of app.config
	
	app.factory('transferService', function(){
		var savedData = {}
		
		function set(data){
			savedData = data;
		}
		
		function get(){
			let data = savedData;
			savedData = {};	//clear value	// added by me
			return data;
		}
		
		return{
			set: set,
			get: get
		}
	})
	
