'use strict';

/* Controllers */


function LandingController($scope,$resource, fetchTasks) {
	this.jsono_callback=function ($scope,jsonp){
		console.log($scope);
		$scope.tasks = jsonp;
		console.log(jsonp);
	};
	$scope.user={name: "Arash"};
	fetchTasks.get({},function(tasks){
		console.log(tasks);
		$scope.issues = issues(tasks.issues);
		console.log($scope.issues);
	});		
}


LandingController.$inject = ['$scope','$resource','fetchTasks'];

function IssueController($scope,$resource,  $routeParams) {
	var id = $routeParams.issueId;
	console.log(id);
	var r = $resource("https://hd.univeris.com/rest/api/2/issue/:resourceId?jsonp-callback=JSON_CALLBACK",{},{get: {method:'JSONP'}, replies:{method:'JSONP'}});
	r.get({resourceId : id}, 
		function(issue){
			console.log(issue);
			$scope.issue=issue.fields;
			$scope.key=issue.key;
		}	
		);
}

function MyCtrl2() {
}
MyCtrl2.$inject = [];
