angular.module("DataService", [])

.factory("DataService", function($http) {
	var that = this;
	
	var characters = [];
	
	that.getDataForUser = getDataForUser;
	that.characters = [];

	function getDataForUser(userId) {
		var url = 'http://www.bungie.net/Platform/Destiny/SearchDestinyPlayer/TigerPSN/';
		$http.get(url + userId)
		.success(getPlayerData);
	}

	function getPlayerData(data, status, headers, config) {
		var memberId = data.Response[0].membershipId;
		var url = 'http://www.bungie.net/Platform/Destiny/TigerPSN/Account/';
		$http.get(url + memberId)
		.success(function(data, status, headers, config) {
			that.characters = data.Response.data.characters;
		});
	}

	return that;
});