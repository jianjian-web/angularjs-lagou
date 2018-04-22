angular.module('app').directive('appFooter', [function () {
	return {
		restrict: 'AE',
		replace: true,
		templateUrl: '../view/tpl/foot.html',
		controller: function ($scope) {
			$scope.current = 1
			$scope.footClick = function (v) {
				$scope.current = v
			}
		}
	}
}])