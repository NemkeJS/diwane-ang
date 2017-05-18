"use strict";

app.config(function ($routeProvider, $locationProvider) {
  $locationProvider.hashPrefix('');
  $routeProvider.when("/", {
    templateUrl: "dist/templates/index.html",
    controller: "mainCtrl"
  }).when("/newuser", {
    templateUrl: "dist/templates/newuser.html",
    controller: "newUser"
  }).otherwise({
    templateUrl: "/"
  });
});

app.config(['$mdIconProvider', function ($mdIconProvider) {
  $mdIconProvider.icon('md-close', 'img/icons/ic_close_24px.svg', 24);
}]).controller('BasicDemoCtrl', DemoCtrl);

function DemoCtrl($timeout, $q, takevalue) {
  var self = this;

  self.readonly = false;

  self.fruitNames = ['Anuglar', 'Node', 'Php'];
  self.roFruitNames = angular.copy(self.fruitNames);
  self.editableFruitNames = angular.copy(self.fruitNames);

  self.take = takevalue.make;
}