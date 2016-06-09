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
				$scope.sectionBool = false;

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



				function getSections() {
					$scope.sections = [
						{ id: '1', sectionname: 'A' },
						{ id: '2', sectionname: 'B' },
						{ id: '3', sectionname: 'C' },
						{ id: '4', sectionname: 'D' },
						{ id: '5', sectionname: 'E' },
						{ id: '6', sectionname: 'F' },
						{ id: '7', sectionname: 'G' },
						{ id: '8', sectionname: 'H' },
						{ id: '9', sectionname: 'I' },
						{ id: '10', sectionname: 'J' },
						{ id: '11', sectionname: 'K' },

					];

				}
				getSections();
				$scope.sectionArray = [];
				$scope.addSection = function () {
					$scope.sections = {};

					$scope.sections.sectionName = $scope.selectSection;
					$scope.sectionArray.push($scope.sections);
					getSections();
				}


				$scope.changeClass = function () {
					console.log("select Change" + $scope.selectClass.name);

					if ($scope.selectClass.name == 'Others') {
						$scope.showOthers = !$scope.showOthers;
						$scope.sectionBool = !$scope.sectionBool;
						///	$scope.sectionBool = true; 

					} else {
						//$scope.showOthers = ($scope.showOthers == true) ? true:false;
						$scope.sectionBool = true;
						$scope.showOthers = false;
					}

				}


				$scope.sectionRemove = function (section) {
					$scope.sectionArray.splice($scope.sectionArray.indexOf(section), 1)
				}
				$scope.saveClass = function () {

					console.log("" + $scope.selectClass);

				}




			},
			link: function (scope, element, attrs) {
				//element[0].innerHTML = "<b>TRY </b>";
			}
		}
	});

