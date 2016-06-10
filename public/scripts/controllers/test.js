'use strict';
angular.module('smartSchoolApp')
    .controller('testCtrl', function ($scope, $state, $position, $q, $window, $http) {

        console.log("Test Page");
        $scope.userLists = [];

       $scope.myPromise =  $http.get("http://jsonplaceholder.typicode.com/posts").then(function (res) {

            $scope.userLists = res.data;

        })

        $scope.remove = function (user) {
            BootstrapDialog.show({
                type: BootstrapDialog.TYPE_SUCCESS,
                title: 'Say-hello dialog',
                message: $('<div></div>').load('views/pages/remote.html')
            });
            $scope.userLists.splice($scope.userLists.indexOf(user.Name), 1);
        }

        $scope.update = function () {

        }

    });
