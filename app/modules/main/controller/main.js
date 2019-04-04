'use strict';

/**
 * @ngdoc function
 * @name notesApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the notesApp
 */



app.controller('MainCtrl', function ($scope, $rootScope, $state, mainService) {


  var paginationOptions = {
    pageNumber: 1,
    pageSize: 10,
    sort: null
  };
  mainService.getStudents(
    paginationOptions.pageNumber,
    paginationOptions.pageSize).then(function (response) {

    $scope.gridOptions.data = response.data.content;
    $scope.gridOptions.totalItems = response.data.totalElements;
  });





  $scope.gridOptions = {
    paginationPageSizes: [10, 10, 20],
    paginationPageSize: paginationOptions.pageSize,
    enableColumnMenus: true,
    useExternalPagination: true,
    columnDefs: [{
        name: 'codeClient'
      },
      {
        name: 'nomPrenom'
      },
      {
        name: 'codeTVA'
      },
      {
        name: 'telephone'
      },
      {
        name: 'email'
      },{
      name:'View',
      cellTemplate:'<div><a href="#/client/{{row.entity.idClient}}">View</a></div>'
      }
    ],
    onRegisterApi: function (gridApi) {
      $scope.gridApi = gridApi;
      gridApi.pagination.on.paginationChanged(
        $scope,
        function (newPage, pageSize) {
          paginationOptions.pageNumber = newPage;
          paginationOptions.pageSize = pageSize;
          mainService.getStudents(newPage, pageSize)
            .then(function (response) {
              $scope.gridOptions.data = response.data.content;
              $scope.gridOptions.totalItems = response.data.totalElements;
            });
        });
    }
  };



});
