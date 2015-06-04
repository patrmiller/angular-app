angular.module("app", ["ngRoute", "DestinyPlayerStats"])

.config(function($routeProvider) {
	$routeProvider.when('/search', {
		templateUrl: "layout/views/search.html",
		controller: "PlayerController",
		controllerAs: "pc"
	})
	.when('/details', {
		templateUrl: "layout/views/detail.html" //,
		//controller:,
		//controllerAs
	})
	.otherwise("/search");
});