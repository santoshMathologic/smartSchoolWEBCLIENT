
var app = angular.module('smartSchoolApp');

app.factory('UserAuthFactory', function($state,$window, $cookies, $location, $http, AuthenticationFactory) {
  return {
    login: function(username, password) {
      return $http.post(apiLoginUrl, {
        username: username,
        password: password
      });
    },
    logout: function() {
      if (AuthenticationFactory.isLogged) {
        AuthenticationFactory.isLogged = false;
        delete AuthenticationFactory.user;
        delete AuthenticationFactory.userRole;
        delete $window.sessionStorage.userPlan; 
        delete $window.sessionStorage.token;
        delete $window.sessionStorage.user;
        delete $window.sessionStorage.userRole;
        $cookies = {};
        $state.go("login");
      }
 
    }
  }
});
 