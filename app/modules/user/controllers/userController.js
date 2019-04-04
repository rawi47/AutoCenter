'use strict';

/**
 * @ngdoc function
 * @name notesApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the notesApp
 */

  app.controller('UserCtrl', function ($scope,$state,$rootScope,UserService,$window) {

	$rootScope.user = {};

	$scope.login = function() {
		UserService.loginUser($scope.log,$scope.password);
		
	}




    
  });
