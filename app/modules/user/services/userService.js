'use strict';

/**
 * @ngdoc function
 * @name notesApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the notesApp
 */

  app.service('UserService', function ($rootScope,$http,$window,$state) {




	this.loginUser = function(login,password){
		

			$http.post('http://' + $rootScope.serv + ':' + $rootScope.por + '/login',{"username" : login, "password" : password}).
			then(function(response) {
				console.log(response.data);
				console.log(Object.keys(response.data).length);
				$window.localStorage.setItem('connectedUser', response.data.id);
				if (Object.keys(response.data).length > 0) {
					$state.go('home');
				}else {
					$rootScope.err = "Login ou mdp erronée";

				}
			    
		
			});

	


	};



    
  });
