app.service("mainService", function($rootScope,$http){

	function getStudents(pageNumber,size) {
        pageNumber = pageNumber > 0?pageNumber - 1:0;
        return $http({
          method: 'GET',
            url: 'http://' + $rootScope.serv + ':' + $rootScope.por + '/rest_api/client/index?page='+pageNumber+'&size='+size
        });
    }
    return {
        getStudents: getStudents
    };
  
});
