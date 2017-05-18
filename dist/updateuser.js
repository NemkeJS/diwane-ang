'use strict';

app.service('updateusers', ['$http', function ($http) {
	this.updateUser = function (user) {
		var users = new FormData();
		users.append("id", user.id);
		users.append("first_name", user.first_name);
		users.append('last_name', user.last_name);

		return $http.post('login/update.php', users, {
			transformRequest: angular.identity,
			headers: { 'Content-Type': undefined }

		});
	};
}]);