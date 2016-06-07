'use strict';
angular.module('smartSchoolApp')
    .directive('customTable', function () {
        return {
            templateUrl: 'scripts/directives/datatable/customtable.html',
            restrict: 'E',
            scope: {
                'firstHeader': "@",
                'secondHeader': "@",
                'thirdHeader': "@",
                'forthHeader': "@",
                'fifthHeader': "@",
                'sixthHeader': "@",
                'seventhHeader': "@",
                'eightHeader': "@",
                'ninthHeader': "@",
                'tenthHeader': "@"
            },
            replace: true,

            controller: function ($scope, $http) {

               


                $scope.trainStations = [];
                $scope.queryParam = {     // QueryParam object hold orderNo,limit,page and id
                    sortBy: 'trainNo',
                    limit: 20,
                    page: 1
                }

                $http.get(apiUrl + "/trainStations/getStations", { params: $scope.queryParam }).then(function (res) {
                    $scope.trainStations = res.data.results;

                });

                var parvar = $scope.$parent.first_header;
                console.log(parvar);


            },

        }

    });
