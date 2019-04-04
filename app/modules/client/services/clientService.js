'use strict';

app.service("clientService", function($rootScope,$http){

    function getClient(idClient) {
        return $http({
          method: 'GET',
            url: 'http://' + $rootScope.serv + ':' + $rootScope.por + '/rest_api/client/show?id='+idClient
        });
    }
    return {
        getClient: getClient
    };
  
});
