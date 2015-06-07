angular.module("LoaderDirective", [])

.directive("loader", function() {
	return {
		restrict: "E",
		templateUrl: "app/directives/loader/loader.directive.html",
		scope: {
			loaded: "="
		}
	}
})