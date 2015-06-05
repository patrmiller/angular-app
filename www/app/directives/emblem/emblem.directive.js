angular.module("EmblemDirective", [])

.directive("emblem", function() {
	return {
		restrict: "E",
		templateUrl: "app/directives/emblem/emblem.directive.html",
		scope: {
			pc: "=",
			character: "=",
			index: "="
		}
	}
})