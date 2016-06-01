'use strict';
angular.module('smartSchoolApp')
	.directive('viewUser', function () {
		return {
			templateUrl: 'scripts/directives/user/viewuser.html',
			restrict: 'EA',
			replace: true,
			controller: function ($scope, $http, UserAuthFactory, AuthenticationFactory) {
				console.log("Inside view class diredctive Controller")


                var uri = apiUrl + "/" + "class" + "/" + "classes";

				$scope.query = {
                    order: 'class_Name',
                    limit: 10,
                    page: 1,

                };

				$scope.isLoading = false;
				$http.get(uri, { params: $scope.query })
					.then(function (response) {
						$scope.classList = response.data.results;

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

