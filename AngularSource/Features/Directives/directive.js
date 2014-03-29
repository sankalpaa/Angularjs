var helloAngularApp = angular.module('helloAngularApp', [])

.directive('helloDirective', function () {
	return {
		template: 'Hello Directive!'
	};
});