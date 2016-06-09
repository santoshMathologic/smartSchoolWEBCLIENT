'use strict'

angular.module('smartSchoolApp').directive('userPlan', function () {

  return {
    templateUrl: 'scripts/directives/userPlan/userPlan.tmpl.html',
    restrict: 'EA',
    replace: true,
    controller: function ($scope, $http, ngDialog) {

     

     //// tabs implement 

     $scope.activeTab = 1;

     $scope.setActiveTab =  function(tabToSet){
        $scope.activeTab = tabToSet;
     }
     
     
     
     
      $scope.itemsPerPage = "";


      $scope.planName = {
        options: {
          debounce: 500
        }
      };

      $scope.coPlanners = {
        options: {
          debounce: 500
        }
      };
      $scope.createdTime = {
        options: {
          debounce: 500
        }
      };
      $scope.isComplete = {
        options: {
          debounce: 500
        }
      };

      $scope.isLinkGenerated = {
        options: {
          debounce: 500
        }
      };
      $scope.isLocked = {
        options: {
          debounce: 500
        }
      };

      $scope.isUnderReview = {
        options: {
          debounce: 500
        }
      };

      $scope.owner = {
        options: {
          debounce: 500
        }
      };



      $scope.queryParam = {
        sortBy: 'planName',
        limit: 10,
        page: 1,
        planName: '',
        owner: '',
        createdTime: '',
        coPlanners: '',
        isLocked: '',
        isUnderReview: '',
        isComplete: '',
        isLinkGenerated: '',
        markDelete: false,
      }




      $scope.userPlanLists = [];

      $scope.getPlanList = function () {


        $http.get(apiUrl + "/plans/getPlans", { params: $scope.queryParam }).then(function (res) {
          $scope.userPlanLists = res.data.results;

        });

      }

      $scope.getPlanList();


      $scope.removeUserPlan = function (plan) {
        console.log("Scope vales", plan);
        $scope.userPlanLists.splice($scope.userPlanLists.indexOf(plan), 1);
       


      }



      $scope.users = [
        {
          "id": 1,
          "firstname": "shankar",
          "lastname": "sahu",
          "username": "Bret",
          "email": "Sincere@april.biz",

        },
        {
          "id": 2,
          "firstname": "reena",
          "lastname": "bhoi",
          "username": "Bret",
          "email": "Sincere@april.biz",

        },
        {
          "id": 3,
          "firstname": "david",
          "lastname": "sone",
          "username": "Bret",
          "email": "Sincere@april.biz",

        },
        {
          "id": 4,
          "firstname": "jagdish",
          "lastname": "panchal",
          "username": "Bret",
          "email": "Sincere@april.biz",

        },
        {
          "id": 5,
          "firstname": "omar",
          "lastname": "abdullah",
          "username": "Bret",
          "email": "Sincere@april.biz",

        },
        {
          "id": 6,
          "firstname": "shyam",
          "lastname": "shawn",
          "username": "Bret",
          "email": "Sincere@april.biz",

        },
        {
          "id": 7,
          "firstname": "rohit",
          "lastname": "agarwal",
          "username": "Bret",
          "email": "Sincere@april.biz",

        },
        {
          "id": 8,
          "firstname": "rakesh",
          "lastname": "saraswat",
          "username": "Bret",
          "email": "Sincere@april.biz",

        },
        {
          "id": 9,
          "firstname": "marhan",
          "lastname": "sharma",
          "username": "Bret",
          "email": "Sincere@april.biz",

        },
        {
          "id": 10,
          "firstname": "Leanne",
          "lastname": "Roy",
          "username": "Bret",
          "email": "Sincere@april.biz",

        },

        {
          "id": 11,
          "firstname": "Santosh",
          "lastname": "Sahu",
          "username": "Bret",
          "email": "Sincere@april.biz",

        },
      ]


      $scope.searchQuery = function (strquery) {

        console.log(strquery);

        var matches = [];
        $scope.users.forEach(function (person) {
          var fullName = person.firstname + ' ' + person.lastname;
          if ((person.firstname.toLowerCase().indexOf(strquery.toString().toLowerCase()) >= 0) ||
            (person.lastname.toLowerCase().indexOf(strquery.toString().toLowerCase()) >= 0) ||
            (fullName.toLowerCase().indexOf(strquery.toString().toLowerCase()) >= 0)) {
            matches.push(person);
          }
        });
        return matches;
      }




    },

    link: function (scope, element, attrs) {



    }


  }
})


