angular.module("DestinyPlayerStats", ["DataService"])

.controller("PlayerController", ["$scope", "DataService", 
	function($scope, DataService) {
		var that = this;

		that.userId = 'mille885';
		that.getImageURL = getImageURL;
		that.getHashValue = getHashValue;
		that.getDataForUser = getDataForUser;

		$scope.$watch(function() {
				return DataService.characters;
			}, function (newValue, oldValue, scope) {
			if(newValue) {
				that.characters = newValue;
			}
		});

		getDataForUser();

		function getDataForUser() {
			DataService.getDataForUser(that.userId);			
		}
		
		function getHashValue(value) {
			var hashes = { 3159615086: 'glimmer', 1415355184: 'crucible marks', 1415355173: 'vanguard marks', 898834093: 'exo', 3887404748: 'human', 2803282938: 'awoken', 3111576190: 'male', 2204441813: 'female', 671679327: 'hunter', 3655393761: 'titan', 2271682572: 'warlock', 3871980777: 'new monarchy', 529303302: 'cryptarch', 2161005788: 'iron banner', 452808717: 'queen', 3233510749: 'vanguard', 1357277120: 'crucible', 2778795080: 'dead orbit', 1424722124: 'future war cult' };
			return hashes[value];
		}

		function getImageURL(URLFragment) {
			return "http://www.bungie.net" + URLFragment;
		}
}])