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

      
      $scope.removeUserPlan = function(){
console.log("Scope vales", $scope);



      }

    },
    link: function (scope, element, attrs) {



    }


  }



}).directive('tabs', function() {
    return {
      restrict: 'E',
      transclude: true,
      scope: {},
       template:
        '<div class="tabbable">' +
          '<ul class="nav nav-tabs">' +
            '<li ng-repeat="pane in panes" ng-class="{active:pane.selected}">'+
              '<a href="" ng-click="select(pane)">{{pane.title}}</a>' +
            '</li>' +
          '</ul>' +
          '<div class="tab-content" ng-transclude></div>' +
        '</div>',
      replace: true,

      
      controller: [ "$scope", function($scope) {
        var panes = $scope.panes = [];
 
        $scope.select = function(pane) {
          angular.forEach(panes, function(pane) {
            pane.selected = false;
          });
          pane.selected = true;
        }
 
        this.addPane = function(pane) {
          if (panes.length == 0) $scope.select(pane);
          panes.push(pane);
        }
      }],
     
    };
  }).
  directive('pane', function() {
    return {
      require: '^tabs',
      restrict: 'E',
      transclude: true,
      scope: { title: '@' },
      link: function(scope, element, attrs, tabsCtrl) {
        tabsCtrl.addPane(scope);
      },
      template:
        '<div class="tab-pane" ng-class="{active: selected}" ng-transclude>' +
        '</div>',
      replace: true
    };
  });



