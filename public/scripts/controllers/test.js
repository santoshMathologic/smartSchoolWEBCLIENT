'use strict';
angular.module('smartSchoolApp')
    .controller('testCtrl', function ($scope, $state, $position, $q, $window, $http) {

        console.log("Test Page");
        $scope.userLists = [];

        $http.get("http://jsonplaceholder.typicode.com/posts").then(function (res) {

            $scope.userLists = res.data;

        })

        $scope.remove = function (user) {
            $scope.userLists.splice($scope.userLists.indexOf(user.Name), 1);
        }

        $scope.update = function () {

        }

    });
