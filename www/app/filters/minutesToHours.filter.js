angular.module("MinutesToHours", [])

.filter("minutesToHours", function() {
	return function(input) {
		var hours = parseInt(input, 10) / 60;
		
		if(hours == null || hours < 1) {
			return input + " minutes ";
		} else {
			var minutesString = "";
			var hoursString = hours.toString();
			var output = "";
			output = hoursString.substring(0, hoursString.indexOf(".")) + " hours";
			minutesString = hoursString.substring(hoursString.indexOf("."), hoursString.length);

			if(minutesString.length > 0) {
				output += " " + 
						  Math.round(Math.round(Number(minutesString) * 100) / 100 * 60) + 
						  " minutes ";
			}

			return output;
		}
	}
})