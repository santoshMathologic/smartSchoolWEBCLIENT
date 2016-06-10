'use strict';
angular.module('smartSchoolApp')
	.directive('viewClass', function () {
		return {
			templateUrl: 'scripts/directives/class/viewclass.html',
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

				$scope.removeClass = function (classObj) {

					$scope.classList.splice($scope.classList.indexOf(classObj), 1);

				}





			},
			link: function (scope, element, attrs) {
				//element[0].innerHTML = "<b>TRY </b>";
			}
		}
	});

