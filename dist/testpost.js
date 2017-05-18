'use strict';

app.service('testpost', ['$http', function ($http) {
	this.saveRecipe = function (postdata) {

		var payload = new FormData();
		payload.append("first_name", postdata.first_name);
		payload.append('last_name', postdata.last_name);
		payload.append('date', postdata.date);
		payload.append('cv_file_name', postdata.cv_file_name);
		payload.append('author', postdata.author);
		payload.append('note', postdata.note);
		payload.append('skill', postdata.skill);
		payload.append('skill1', postdata.skill1);
		payload.append('skill2', postdata.skill2);
		payload.append('skill3', postdata.skill3);

		return $http.post('login/post.php', payload, {
			transformRequest: angular.identity,
			headers: { 'Content-Type': undefined }

		});
	};
}]);