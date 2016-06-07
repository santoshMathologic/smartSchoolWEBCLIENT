'use strict'

angular.module('smartSchoolApp').directive('trainStation', function () {

    return {
        templateUrl: 'scripts/directives/trainStations/trainStation.tmpl.html',
        restrict: 'EA',
        replace: true,
        controller: function ($scope, $http,$rootScope) {



           $scope.listTitle = "trainStation";
            $scope.queryParam = {     // QueryParam object hold orderNo,limit,page and id
                sortBy: 'trainNo',
                limit: 20,
                page: 1
            }

            $scope.trainStation = apiUrl + "/trainStations/getStations";
            $rootScope.$on($scope.listTitle, function(event, data) 
            { console.log(data); 
            });

        },
        link: function (scope, element, attrs) {



        }


    }



});



