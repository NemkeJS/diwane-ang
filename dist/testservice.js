'use strict';

app.service('testserv', ['$http', function ($http) {
	return $http({
		url: 'login/json.php',
		method: 'GET',
		dataType: 'json',
		headers: {
			'Content-Type': 'application/json'
		}
	});
}]);