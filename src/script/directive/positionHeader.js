angular.module('app').directive('positionHeader', [function () {
	return {
		restrict: 'AE',
		replace: true,
		scope: {
			title: '@'
		},
		templateUrl: '../view/tpl/positionHeader.html'
	}
}])