'use strict';

/**
 * @ngdoc function
 * @name notesApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the notesApp
 */



app.controller('ClientController', function ($scope, $rootScope, $state, $q,  $routeParams,clientService) {


  var idClient = $routeParams.idClient;


  var wait = function () {
    var deferred = $q.defer();
    setTimeout(function () {
      deferred.resolve(clientService.getClient(idClient));
    }, 1000);
    return deferred.promise;
  };

  wait()
    .then(function (rest) {
        console.log(rest);
        $scope.codeClient = rest.data.codeClient;
        $scope.nomPrenom = rest.data.nomPrenom;
        $scope.email = rest.data.email;
        $scope.codeTVA = rest.data.codeTVA;
        $scope.telephone = rest.data.telephone;

        $scope.adresse = rest.data.adresse;
        $scope.fax = rest.data.fax;
        $scope.plafond = rest.data.plafond;
        $scope.pointsFidelite = rest.data.pointsFidelite;
        $scope.remise = rest.data.remise;
        $scope.valeurDesPoints = rest.data.resvaleurDesPointsponsable;
        $scope.vehiculeSets = rest.data.vehiculeSets;
    })
    .catch(function (fallback) {
      console.log(fallback);
    });


});
