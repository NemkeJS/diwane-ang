'use strict';

var app = angular.module('clientApp', ['ngRoute', 'ngAria', 'ngMaterial', 'ngAnimate', 'ngMessages', 'angularUtils.directives.dirPagination']);

app.controller('mainCtrl', ['$scope', '$http', 'testserv', 'updateusers', function ($scope, $http, testserv, updateusers) {
	testserv.then(function (data) {
		$scope.users = data.data;
		$scope.count = data.data.length;
	});

	this.updateUser = function (user) {
		updateusers.updateUser(user).then(function (data) {
			return data;
		}).error = function () {
			return false;
		};
	};

	//delte request shorthand method
	$scope.del = function (e) {
		var del = event.target.getAttribute('id');
		event.target.parentNode.parentNode.remove();
		$http.post('login/delete.php', { id: del }).then(function () {
			alert('Delted User');
		});
	};

	//sort and filter
	$scope.sort = function (keyname) {
		$scope.sortKey = keyname;
		$scope.reverse = !$scope.reverse;
	};

	//number of rows to display 
	$scope.userState = '';
	$scope.states = '5 10 15 20 25 30 35 40 All'.split(' ').map(function (state) {
		return { abbrev: state };
	});
}]);

app.controller('newUser', ['$scope', '$filter', 'testpost', '$mdDialog', function ($scope, $filter, testpost, $mdDialog) {
	$scope.postdata = {};
	$scope.arr = [];
	var bar = document.getElementsByClassName('md-chip-content');

	this.saveRecipe = function (postdata) {
		for (var i = 0; i < bar.length; i++) {
			$scope.arr.push(bar[i].innerText);
		}
		var skills = $scope.arr;
		postdata.date = $filter('date')(postdata.date, "MM/dd/yyyy").split('/').join('-');
		postdata.skill = skills[0];
		postdata.skill2 = skills[1];
		postdata.skill3 = skills[2];
		postdata.skill4 = skills[3];
		testpost.saveRecipe(postdata).then(function (data) {
			return data;
		}).error = function () {
			return false;
		};
	};

	var alert = void 0;

	$scope.showDialog = function ($event) {
		alert = $mdDialog.alert({
			title: 'Nes user added',
			content: 'You sent data',
			ok: 'Close'

		});

		$mdDialog.show(alert).finally(function () {
			alert = undefined;
		});
	};
}]);

// All the request and service for CRUD could be done also with single $resource service