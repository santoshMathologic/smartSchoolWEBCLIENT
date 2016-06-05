'use strict';
angular.module('smartSchoolApp')
	.directive('viewUser', function () {
		return {
			templateUrl: 'scripts/directives/user/viewuser.html',
			restrict: 'EA',
			replace: true,
			controller: function ($scope, $http, UserAuthFactory, AuthenticationFactory) {
				console.log("Inside view class diredctive Controller")

                $scope.users  = [];
                var userUri = apiUrl + "/" + "admin" + "/" + "users";
				
				$scope.query = {
                    order: 'userName',
                    limit: 50,
                    page: 1,

                };

				$scope.isLoading = false;
				$http.get(userUri, { params: $scope.query })
					.then(function (response) {
						$scope.users = response.data.results;

					}).catch(function (err) {
						
					})
					.finally(function () {
						$scope.isLoading = true;
					});






			},
			link: function (scope, element, attrs) {
				//element[0].innerHTML = "<b>TRY </b>";
			}
		}
	});

