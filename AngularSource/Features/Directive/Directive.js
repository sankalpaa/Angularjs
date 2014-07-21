var helloAngularApp = angular.module('helloAngularApp', []);
helloAngularApp.directive('helloDirective', function () {
	return {
		restrict: 'AE',
		replace: 'true',
		template: '<h3>Hello Directive!</h3>'
	};
});
