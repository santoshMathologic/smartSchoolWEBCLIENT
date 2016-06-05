'use strict';
angular.module('smartSchoolApp')
	.directive('user', function () {
		return {
			templateUrl: 'scripts/directives/user/user.html',
			restrict: 'EA',
			replace: true,
			controller: function ($scope, filterFilter, toaster) {
				console.log("Inside class diredctive Controller")
				$scope.roles = [];
				var roleUri = apiUrl + "/" + "roles";
				var createUserUri = apiUrl + "/" + "admin" + "/" + "user" + "/" + "create";
				$http.get(roleUri).then(function (response) {
					$scope.roles = response.data;
					console.log($scope.roles);

				}).catch(function (err) {

				})
					.finally(function () {
						$scope.isLoading = true;
					});


				$scope.userdetails = {
					userName: "",
					firstName: "",
					lastName: "",
					password: "",
					email: "",
					roleCode: "",
					userActive: "",
					mobileNo: "",
				}

				$scope.saveUser = function () {
					var hashedPassword = md5($scope.userdetails.password)
					$scope.userdetails.password = hashedPassword;

					$http.post(createUserUri, $scope.userdetails).then(function (response) {
                        console.log("response" + response);

						toaster.pop({
							type: 'error',
							title: 'Title text',
							body: 'Body text',
							timeout: 3000
						});

					});
				}




			},
			link: function (scope, element, attrs) {
				//element[0].innerHTML = "<b>TRY </b>";
			}
		}
	});

