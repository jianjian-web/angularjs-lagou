angular.module('app').directive('appFooter', [function () {
	return {
		restrict: 'AE',
		replace: true,
		templateUrl: '../view/tpl/foot.html',
		scope: {
			active: '='
		}
	}
}])