angular.module('app').directive('appPositionList', [
	function () {
		return {
			restrict: 'AE',
			replace: true,
			templateUrl: '../view/tpl/positionList.html',
			scope: {
				data: '='
			}
		}
	}
])