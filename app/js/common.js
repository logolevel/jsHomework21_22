var app = {
	pow: function(x, n) {
		var result = x;
		for (var i = 1; i < n; i++) {
			result *=x;
		}
			return result; 
	}

}
/*file to module*/
module.exports = app;
