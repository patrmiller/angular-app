angular.module("DestinyPlayerDetails", ["HashService", "DataService"])

.controller("DetailController", ["HashService", "DataService", "$location", 
	function(HashService, DataService, $location) {
		var that = this;
		that.loaded = false;
		var queryParams = $location.search();
		var userDataPromise = DataService.getDataForUser(queryParams.user);

		userDataPromise.then(function(response) {
			that.character = response.data.Response.data.characters[queryParams.index];
			that.loaded = true;
		});

		that.userId = queryParams.user;
		that.getHashValue = getHashValue;

		function getHashValue(value) {
			return HashService.getHashValue(value);
		}
}])