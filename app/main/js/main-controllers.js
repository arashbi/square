'use strict';

/* Controllers */


function LandingController($scope,$resource, fetchTasks) {
	this.jsono_callback=function ($scope,jsonp){
		console.log($scope);
		$scope.tasks = jsonp;
		console.log(jsonp);
	};
	$scope.user={name: "Arash"};
	// $scope.tasks=fetchTasks();
			var tasksRequest = 
			$resource("https://hd.univeris.com/rest/api/2/search?jql=assignee=currentUser()&os_username=abizhanzadeh&os_password=o0ldouzi&maxResults=5&jsonp-callback=JSON_CALLBACK",{},{get: {method:'JSONP'}, replies:{method:'JSONP'}});
			
		var response= tasksRequest.get({},function(){
			$scope.issues = response.issues;
			console.log($scope.issues);
		});
		// $scope.issues = response;
		console.log("Resource call succeeded");
		// console.log($scope.issues);
		
}


LandingController.$inject = ['$scope','$resource','fetchTasks'];

function MyCtrl1() {}
MyCtrl1.$inject = [];


function MyCtrl2() {
}
MyCtrl2.$inject = [];
