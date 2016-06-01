'use strict';
angular.module('smartSchoolApp')
	.directive('createClass', function () {
		return {
			templateUrl: 'scripts/directives/class/class.html',
			restrict: 'EA',
			replace: true,
			controller: function ($scope, filterFilter) {
				console.log("Inside class diredctive Controller")
				$scope.selectClass = "";
				$scope.showOthers = false;
				$scope.selectMenu = [
					{ id: '1', name: 'Class I' },
					{ id: '2', name: 'Class II' },
					{ id: '3', name: 'Class III' },
					{ id: '4', name: 'Class VI' },
					{ id: '5', name: 'Class V' },
					{ id: '6', name: 'Class XI' },
					{ id: '7', name: 'Class XII' },
					{ id: '8', name: 'Class XIII' },
					{ id: '9', name: 'Class IX' },
					{ id: '10', name: 'Class X' },
					{ id: '11', name: 'Others' },

				];
				$scope.customField = { customFieldSet: true };
				$scope.changeClass = function () {
					console.log("select Change" + $scope.selectClass.name);

					if ($scope.selectClass.name == 'Others') {
						$scope.showOthers = !$scope.showOthers;

					} else {
						//$scope.showOthers = ($scope.showOthers == true) ? true:false;
						$scope.showOthers = false;
					}

				}

				$scope.saveClass = function () {

					console.log("" + $scope.selectClass);

				}

				// fruits
				$scope.fruits = [
					{ name: 'Section_1', selected: true },
					{ name: 'Section_2', selected: false },
					{ name: 'Section_3', selected: true },
					{ name: 'Section_4', selected: false },
					{ name: 'Section_5', selected: false },
					{ name: 'Section_6', selected: false },
					{ name: 'Section_7', selected: false },
					{ name: 'Section_8', selected: false },
					{ name: 'Section_9', selected: false },
					{ name: 'Section_10', selected: false }
				];

				// selected fruits
				$scope.selection = [];

				// helper method to get selected fruits
				$scope.selectedFruits = function selectedFruits() {
					return filterFilter($scope.fruits, { selected: true });
				};

				// watch fruits for changes
				$scope.$watch('fruits|filter:{selected:true}', function (nv) {
					$scope.selection = nv.map(function (fruit) {
						return fruit.name;
					});
				}, true);


			},
			link: function (scope, element, attrs) {
				//element[0].innerHTML = "<b>TRY </b>";
			}
		}
	});

