angular.module("DataService", [])

.service("DataService", function($http) {
	var that = this;
	
	var characters = [];
	
	that.getDataForUser = getDataForUser;
	that.characters = [];

	function getDataForUser(userId) {
		var url = 'http://www.bungie.net/Platform/Destiny/SearchDestinyPlayer/TigerPSN/';
		var memberPromise = $http.get(url + userId);

		var playerPromise = memberPromise.then(function(response) {
			var memberId = response.data.Response[0].membershipId;
			var url = 'http://www.bungie.net/Platform/Destiny/TigerPSN/Account/';
			return $http.get(url + memberId); 
		});
		 
	 	return playerPromise;
	}
	
	return that;
});