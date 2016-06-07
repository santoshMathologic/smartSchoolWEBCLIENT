'use strict';
angular.module('smartSchoolApp')
	.directive('viewUser', function () {
		return {
			templateUrl: 'scripts/directives/user/viewuser.html',
			restrict: 'EA',
			replace: true,
			controller: function ($scope, $http, UserAuthFactory, AuthenticationFactory) {
				console.log("Inside view class diredctive Controller")

                $scope.users = [];
                var userUri = apiUrl + "/" + "admin" + "/" + "users";

				$scope.query = {
                    order: 'userName',
                    limit: 100,
                    page: 1,

                };

				//	var hashedPassword = md5($scope.userdetails.password)
				$scope.isLoading = false;
				$http.get(userUri, { params: $scope.query })
					.then(function (response) {
						$scope.users = response.data.results;
						angular.forEach($scope.users, function (res) {

							var hashedPassword = md5(res.password)
							console.log("dasdsa", res.password);

						});


					}).catch(function (err) {

					})
					.finally(function () {
						$scope.isLoading = true;
					});




                $scope.removeUser = function (user) {
					$http.put(apiUrl + "/" + "admin" + "/" + "user" + "/" + user._id).success(function (succRes) {
						var index = $scope.users.indexOf(user);
						$scope.users.splice(index, 1);

					}, function (errorResp) {
						console.log("Error in Deleting Plan" + errorResp)
					});

				}



			},
			link: function (scope, element, attrs) {
				//element[0].innerHTML = "<b>TRY </b>";
			}
		}
	});

