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
                'tenthHeader': "@",
                listTitle : '=listTitle'
            },
            replace: true,

            controller: function ($scope, $http, $rootScope) {
                $scope.resultList = [];
                var customUrl = $scope.$parent.trainStation;
                var customQueryParam = {};
                customQueryParam = $scope.$parent.queryParam;
              
                $scope.customGet = function () {
                    $http.get(customUrl, { params: customQueryParam }).then(function (response) {
                        $scope.resultList = response.data.results;
                        $rootScope.$emit($scope.listTitle,$scope.resultList);


                    });

                }

                $scope.customGet();

            },

        }

    });
