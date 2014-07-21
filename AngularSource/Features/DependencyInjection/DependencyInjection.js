var helloAngularApp = angular.module('helloAngularApp', []);

helloAngularApp.service("primeFactorsService", function () {
	this.getFactors = function (number) {
		var primeFactors = new Array();
		var candidate = 2;
		while (number != 1) {
			while (number % candidate === 0) {
				primeFactors.push(candidate);
				number /= candidate;
			}
			candidate++;
		}
		if (number != 1)
			primeFactors.push(number);

		return primeFactors;
	};
});

helloAngularApp.controller("TestController", function ($scope, primeFactorsService) {
	$scope.getPrimeFactors = function (number) {
		$scope.result = primeFactorsService.getFactors(number).join(", ");
	};
});
