'use strict';

/* Controllers */

function LoginController($scope) {
	$scope.login = function(){
		alert("hello " + $scope.username + "/" + $scope.password);
	}
}
LoginController.$inject = ['$scope'];

function MyCtrl1() {}
MyCtrl1.$inject = [];


function MyCtrl2() {
}
MyCtrl2.$inject = [];
