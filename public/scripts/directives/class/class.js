
/**
 * Class controller is used to
 * 1. Fetch all the crewTypes from DB 
 * 2. Remove the seleced crewType 
 * @author Santosh sahu
 * @company Mathologic Technologies Pvt. Ltd.
 * @date June 8, 2016
 */

'use strict';
angular.module('smartSchoolApp')
	.directive('createClass', function () {
		return {
			templateUrl: 'scripts/directives/class/class.html',
			restrict: 'EA',
			replace: true,
			controller: function ($scope, filterFilter, toaster, $log, $location, $anchorScroll) {
				console.log("Inside class diredctive Controller")
				$scope.selectClass = "";
				$scope.showOthers = false;
				$scope.sectionBool = false;
				$scope.savebTrue = true;

				function getClasses() {
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
				}

				getClasses();

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
						{ id: '12', sectionname: 'L' },
						{ id: '13', sectionname: 'M' },
						{ id: '14', sectionname: 'N' },
						{ id: '15', sectionname: 'O' },
						{ id: '16', sectionname: 'P' },
						{ id: '17', sectionname: 'Q' },
						{ id: '18', sectionname: 'R' },
						{ id: '19', sectionname: 'S' },
						{ id: '20', sectionname: 'T' },
						{ id: '21', sectionname: 'U' },
						{ id: '22', sectionname: 'V' },
						{ id: '23', sectionname: 'W' },
						{ id: '24', sectionname: 'X' },
						{ id: '25', sectionname: 'Y' },
						{ id: '26', sectionname: 'Z' },

					];

				}
				getSections();
				$scope.sectionArray = [];
				$scope.addSection = function () {
					$scope.sections = {};

					if ($scope.selectSection != undefined) {
						$scope.sections.sectionName = $scope.selectSection;
						$scope.sectionArray.push($scope.sections);
						getSections();
					}

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

				$scope.onSectionChange = function () {
					$scope.savebTrue = !$scope.savebTrue;

				}


				Array.prototype.UniqueSection = function () {

					$scope.sectionArray

					for (var i = 0; i < $scope.sectionArray.length; i++) {


					}

				}

				$scope.sectionRemove = function (section) {
					toaster.pop({ type: 'success', title: 'Success', body: 'Section Removed Successfully !!!' })
					$scope.sectionArray.splice($scope.sectionArray.indexOf(section), 1)
				}
				$scope.saveClass = function () {

					bootbox.confirm("Are you sure?", function (result) {
						if (result == true) {
							if ($scope.sectionArray != null && $scope.selectClass.name != null) {

								switch ($scope.sectionArray) {
									case $scope.sectionArray[0].sectionName.sectionname:
										console.log("case1");
										break;
									case $scope.sectionArray[1].sectionName.sectionname:
										console.log("case2");
										break;






								}

							}


						}
					});




				}




			},
			link: function (scope, element, attrs) {
				//element[0].innerHTML = "<b>TRY </b>";
			}
		}
	});

