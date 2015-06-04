angular.module("app", ["ngRoute", "DestinyPlayerStats", "DestinyPlayerDetails"])

.config(function($routeProvider) {
	$routeProvider.when('/search', {
		templateUrl: "layout/views/search.html",
		controller: "PlayerController",
		controllerAs: "pc"
	})
	.when('/details:character', {
		templateUrl: "layout/views/detail.html",
		controller: "DetailController",
		controllerAs: "dc"
	})
	.otherwise("/search");
});