'use strict'

angular.module('smartSchoolApp').directive('userPlan', function () {

  return {
    templateUrl: 'scripts/directives/userPlan/userPlan.tmpl.html',
    restrict: 'EA',
    replace: true,
    controller: function ($scope, $http) {
      
      $scope.queryParam = {
        sortBy:'planName',
        limit:20,
        page:1
        
      }
      
      $scope.userPlanLists = [];

      $http.get(apiUrl + "/plans/getPlans",{params:$scope.queryParam}).then(function(res){
        $scope.userPlanLists = res.data.results;
        
      }); 

      console.log("Scope vales", $scope);

    },
    link: function (scope, element, attrs) {



    }


  }



});



