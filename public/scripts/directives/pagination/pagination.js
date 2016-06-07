'use strict'

angular.module('smartSchoolApp').directive('customPagination', function () {

    return {
        templateUrl: 'scripts/directives/pagination/pagination.tmpl.html',
        restrict: 'EA',
        replace: true,
        controller: function ($scope, $http) {

            console.log("Pagination Controller");

        },
        link: function (scope, element, attrs) {



        }


    }



}).directive('stRatio', function () {
    return {
        link: function (scope, element, attr) {
            var ratio = +(attr.stRatio);
            element.css('width', ratio + '%');
        }
    };
})



