'use strict';
angular.module('smartSchoolApp')
	.directive('viewClass', function () {
		return {
			templateUrl: 'scripts/directives/class/viewclass.html',
			restrict: 'EA',
			replace: true,
			controller: function ($scope, $http, UserAuthFactory, AuthenticationFactory) {
				console.log("Inside view class diredctive Controller")



				$scope.query = {
                    order: 'class_Name',
                    limit: 10,
                    page: 1,

                };

				$http.get(apiUrl + "/" + "class" + "/" + "classes", { params: $scope.query })
					.then(function (response) {
						$scope.classList = response.data.results;
					});






			},
			link: function (scope, element, attrs) {
				//element[0].innerHTML = "<b>TRY </b>";
			}
		}
	});

