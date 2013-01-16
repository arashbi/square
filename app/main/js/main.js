'use strict';

var issue = function(my) {
		my = my ||{};
		my.url = my.self;
		my.id = my.self.match(/\d*$/)[0];
	return my;
}
var issues = function(arr){
	var my = {};
	for (var i=0; i < arr.length; i++){
		console.log("adding " + arr[i].self);
		var iss = issue(arr[i]);
		my[iss.id] = iss;
	}
	return my;
}
// Declare app level module which depends on filters, and services
angular.module('main', ['main.filters', 'main.services', 'main.directives']).
  config(['$routeProvider', function($routeProvider) {
    $routeProvider.when('/landing', {templateUrl: 'partials/landing.html', controller: LandingController});
    $routeProvider.when('/issue/:issueId',
    	 {templateUrl: 'partials/issue.html', controller: IssueController});
  //   $routeProvider.otherwise(

  //   	{redirectTo: 
  //   		function(param, location){
  //   			console.log(location);
  //   			console.log( "routes is " + routs);
  //   			if(location.match("issue/(.*")[1]!=null){
  //   				return null;
  //   			}
  //   		}
  //   	});
   }]);
