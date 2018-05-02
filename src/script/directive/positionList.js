angular.module('app').directive('appPositionList', [
	function () {
		return {
			restrict: 'AE',
			replace: true,
			templateUrl: '../view/tpl/positionList.html',
			scope: {
				data: '=', // @ 表示接受字符串， = 表示接收一个变量， &表示接收一个函数。
				key: '='
			},
			link: function (scope, ele, attr) {
				console.dir(scope)
			},
			controller: function ($scope,$rootScope) { // 为什么此处不用注入rootScope TODO:
				$scope.handleListClick = function (itemValue) {
					console.dir(itemValue)
					$rootScope.itemValue = itemValue
				}
			}
		}
	}
])