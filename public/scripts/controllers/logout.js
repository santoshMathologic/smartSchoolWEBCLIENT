'use strict';
angular.module('smartSchoolApp')
  .controller('logoutCtrl', function ($scope,$state,$position, $q, $window, UserAuthFactory, AuthenticationFactory) {

 

    $scope.doLogout = function () {

       UserAuthFactory.logout();
     // to fetch the user details on refresh

        $state.go('dashboard.home');



     
    }

  });
