'use strict';
angular.module('smartSchoolApp')
  .controller('loginCtrl', function ($scope,$state,$position, $q, $window, UserAuthFactory, AuthenticationFactory) {

    $scope.userObj = {
      userName: "",
      password: ""
    };

    $scope.doLogin = function () {


      $scope.isLoggedIn = AuthenticationFactory.isLoggedIn();
      var hashedPassword = md5($scope.userObj.password)
      UserAuthFactory.login($scope.userObj.userName, hashedPassword).success(function (res) {

        AuthenticationFactory.isLogged = true;
        AuthenticationFactory.user = res.user.username;
        AuthenticationFactory.userRole = res.user.role;

        $window.sessionStorage.token = res.token;
        $window.sessionStorage.user = res.user.username; // to fetch the user details on refresh
        $window.sessionStorage.userRole = res.user.role; // to fetch the user details on refresh

        $state.go('dashboard.home');



      });
    }

  });
