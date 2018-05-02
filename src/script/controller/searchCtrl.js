angular.module('app').controller('searchCtrl', ['$scope','$http', function ($scope, $http) {
	$scope.keyWord = ''
	$scope.handleSearch = function () {
		if (!$scope.keyWord) return
		console.dir($scope.keyWord)
	}
	$http.get('data/positionList.json').success(function (res) {
		$scope.list = res
	})
}])