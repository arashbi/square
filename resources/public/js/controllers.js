'use strict';

/* Controllers */

function LoginController($scope,$http, login) {
	$scope.login = function(){
		var l = login($scope.data);
		if(!l){
			$scope.data.error="Login failed, please try again"
		}
	}
}
LoginController.$inject = ['$scope','$http','login'];

function MyCtrl1() {}
MyCtrl1.$inject = [];


function MyCtrl2() {
}
MyCtrl2.$inject = [];
