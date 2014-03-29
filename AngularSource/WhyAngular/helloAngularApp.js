var helloAngularApp = angular.module('helloAngularApp', []);


helloAngularApp.controller("helloAngularController", function($scope) {
	$scope.message = "Hello Angular!";
});