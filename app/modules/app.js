'use strict';

/**
 * @ngdoc overview
 * @name notesApp
 * @description
 * # notesApp
 *
 * Main module of the application.
 */
var app = angular
  .module('notesApp', [
    'ngAnimate',
    'ngAria',
    'ngCookies',
    'ngMessages',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'ui.router',
    'ui.grid',
    'ui.grid.pagination'
  ])
  .config(function ($routeProvider, $locationProvider, $stateProvider) {


    $locationProvider.hashPrefix('');

    $routeProvider
      .when('/', {
        templateUrl: 'modules/main/views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })


      .when('/login', {
        templateUrl: 'modules/user/views/login.html',
        controller: 'UserCtrl',
        controllerAs: 'user'
      })

      .when('/config', {
        templateUrl: 'modules/config/views/config.html',
        controller: 'ConfigCtrl',
        controllerAs: 'config'
      })
      .when('/client/:idClient', {
        templateUrl: 'modules/client/views/client.html',
        controller: 'ClientController',
        controllerAs: 'client'
      })
      .otherwise({
        redirectTo: '/'
      });

    $stateProvider


      .state('home', {
        url: '/',
        templateUrl: 'modules/main/views/main.html'
      });

  }).run(['$rootScope', '$window', function ($rootScope, $window) {
    $rootScope.serv = $window.localStorage.getItem('server');
    $rootScope.por = $window.localStorage.getItem('port');
    $rootScope.connectedUser = $window.localStorage.getItem('connectedUser');
  }]);
