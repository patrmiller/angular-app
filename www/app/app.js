angular.module("app", 
	["ngRoute", 
	 "DestinyPlayerStats", 
	 "DestinyPlayerDetails", 
	 "EmblemDirective",
	 "MinutesToHours"])

.config(function($routeProvider) {
	$routeProvider.when('/search', {
		templateUrl: "layout/views/search.html",
		controller: "PlayerController",
		controllerAs: "pc"
	})
	.when('/details/', {
		templateUrl: "layout/views/detail.html",
		controller: "DetailController",
		controllerAs: "dc"
	})
	.otherwise({
		redirectTo: "/search"
	});
});