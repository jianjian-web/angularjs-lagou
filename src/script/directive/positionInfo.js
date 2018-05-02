angular.module('app').directive('positionInfo', function () {
	return {
		restrict: 'AE',
		replace: true,
		scope: {
		},
		templateUrl: 'view/tpl/positionInfo.html',
		controller: ['$scope', '$rootScope', function ($scope, $rootScope) {
			console.log('kaishi')
			$scope.infoValue = $rootScope.itemValue
		}]
	}
})