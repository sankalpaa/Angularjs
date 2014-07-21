var helloAngularApp = angular.module('helloAngularApp', []);
helloAngularApp.controller("helloAngularController", function ($scope) {
	$scope.person = {
		firstName: 'Sankalpa',
		lastName: 'Abeygunawardhana',
		company: 'Exilesoft'
	};
});
