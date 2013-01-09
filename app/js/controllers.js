'use strict';

/* Controllers */

function LoginController($scope,$http) {
	$scope.login = function(){
		alert("hello " + $scope.data.username + "/" + $scope.data.password);
		$http.post("http://localhost:8000/blah",$scope.data)
		.success(
			function (data,status,headers,config){})
		.error(
			function (data,status,headers,config){
				console.log(data);
				console.log(status);
				console.log(headers);
				console.log(config);
			});
	};
}
LoginController.$inject = ['$scope','$http'];

function MyCtrl1() {}
MyCtrl1.$inject = [];


function MyCtrl2() {
}
MyCtrl2.$inject = [];
