(function() {
'use strict';

angular.module('MealApp', [])
.controller('MealController', MealController);

MealController.$inject = ['$scope'];
function MealController($scope) {
$scope.input = '';
$scope.calculate = function () {
    $scope.input.length == 0 ? $scope.output = 'Please enter data first' :
    $scope.output = $scope.input.split(',').length > 3? "Too much!" : "Enjoy!"
}


}

})();
