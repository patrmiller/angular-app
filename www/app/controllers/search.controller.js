angular.module("DestinyPlayerStats", ["DataService", "HashService"])

.controller("PlayerController", ["DataService", "HashService",
	function(DataService, HashService) {
		var that = this;

		that.characters = [];
		that.userId = 'mille885';
		that.getImageURL = getImageURL;
		that.getHashValue = getHashValue;
		that.getDataForUser = getDataForUser;
		that.loaded = false;

		//init
		getDataForUser();

		function getDataForUser() {
			DataService.getDataForUser(that.userId).then(function(response) {
				that.characters = response.data.Response.data.characters;
				that.loaded = true;
			});			
		}
		
		function getHashValue(value) {
			return HashService.getHashValue(value);
		}

		function getImageURL(URLFragment) {
			return "http://www.bungie.net" + URLFragment;
		}
}])