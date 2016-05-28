'use strict';

/**
 * @ngdoc directive
 * @name izzyposWebApp.directive:adminPosHeader
 * @description
 * # adminPosHeader
 */
angular.module('smartSchoolApp')
	.directive('headerNotification', function () {
		return {
			templateUrl: 'scripts/directives/header/header-notification/header-notification.html',
			restrict: 'E',
			replace: true,

			controller: function ($scope, $state, $window, $location, UserAuthFactory, AuthenticationFactory) {


				$scope.doLogout = function () {

					UserAuthFactory.logout();
					// to fetch the user details on refresh

					$state.go('login');




				}

			}
		};




	});


