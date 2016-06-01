'use strict';
angular.module('smartSchoolApp')
	.directive('viewClass', function () {
		return {
			templateUrl: 'scripts/directives/class/viewclass.html',
			restrict: 'EA',
			replace: true,
			controller: function ($scope) {
				console.log("Inside view class diredctive Controller")
				
				


			},
			link: function (scope, element, attrs) {
				//element[0].innerHTML = "<b>TRY </b>";
			}
		}
	});

