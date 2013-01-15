'use strict';

/* Services */


// Demonstrate how to register services
// In this case it is a simple value service.

angular.module('main.services',['ngResource'], function($provide){
	$provide.factory('fetchTasks',['$resource', function($resource){
		var f = function (data){
			// var tasks = 
			// $resource("https://hd.univeris.com/rest/api/2/search?jql=assignee=currentUser()&os_username=abizhanzadeh&os_password=o0ldouzi&maxResults=5",{}
			// );
		var t = 0;//tasks.get();
		return t;
		};
		return f;
	}]);
}).value('version', '0.1');