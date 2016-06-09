'use strict';
angular.module('smartSchoolApp')
    .controller('blankCtrl', function ($scope, $state, $position, $q, $window, UserAuthFactory, AuthenticationFactory) {


        //// tabs implement 

        $scope.activeTab = 1;

        $scope.setActiveTab = function (tabToSet) {
            $scope.activeTab = tabToSet;
        }

        $scope.doLogin = function () {


        }

    });
