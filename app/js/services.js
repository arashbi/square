'use strict';

/* Services */


// Demonstrate how to register services
// In this case it is a simple value service.

angular.module('myApp.services',[], function($provide){
	$provide.factory('login',['$http', function($http){
		var f = function (data){
			$http.post("http://localhost:8000/blah",data)
			.success(
				function (data,status,headers,config){
					console.log("Login suceeded");
					console.log(status);
					return true;
				})
			.error(
				function (data,status,headers,config){
					console.log("login failed");
					console.log(data);
					console.log(status);
					console.log(headers);
					console.log(config);
					return false;
				});
		};
		return f;
	}]);
}).value('version', '0.1');

