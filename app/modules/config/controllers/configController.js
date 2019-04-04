'use strict';

/**
 * @ngdoc function
 * @name notesApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the notesApp
 */

  app.controller('ConfigCtrl', function ($scope,$state,$rootScope,$window,ConfigService) {
	$scope.server = $window.localStorage.getItem('server');
	$scope.port = $window.localStorage.getItem('port');
	$scope.color = $window.localStorage.getItem('color');

	$scope.save = function() {

	$window.localStorage.setItem('server',$scope.server);
	$window.localStorage.setItem('port',$scope.port);
	$window.localStorage.setItem('color',$scope.color);
		
	}




    
  });
