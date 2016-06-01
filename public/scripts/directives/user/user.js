'use strict';
angular.module('smartSchoolApp')
	.directive('user', function () {
		return {
			templateUrl: 'scripts/directives/user/user.html',
			restrict: 'EA',
			replace: true,
			controller: function ($scope, filterFilter) {
				console.log("Inside class diredctive Controller")
				
				$scope.saveUser = function () {

					console.log("Save");

				}

				


			},
			link: function (scope, element, attrs) {
				//element[0].innerHTML = "<b>TRY </b>";
			}
		}
	});

