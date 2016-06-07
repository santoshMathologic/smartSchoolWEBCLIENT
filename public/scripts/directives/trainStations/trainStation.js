'use strict'

angular.module('smartSchoolApp').directive('trainStation', function () {

    return {
        templateUrl: 'scripts/directives/trainStations/trainStation.tmpl.html',
        restrict: 'EA',
        replace: true,
        controller: function ($scope, $http) {

            $scope.trainStations = [];
             $scope.queryParam = {     // QueryParam object hold orderNo,limit,page and id
                sortBy: 'trainNo',
                limit: 20,
                page: 1
            }

            $http.get(apiUrl + "/trainStations/getStations",{params: $scope.queryParam}).then(function (res) {
                $scope.trainStations = res.data.results;
           
            });


        },
        link: function (scope, element, attrs) {



        }


    }



});



