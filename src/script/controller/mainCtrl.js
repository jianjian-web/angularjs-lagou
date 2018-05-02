angular.module('app').controller('mainCtrl', ['$scope', '$state', '$http',function ($scope,$state,$http) {
	console.log('mainmian')
	$http.get('data/positionList.json').success(function (res) {
		$scope.list = res
	})
	// $scope.list = [
	// 	{
	// 		id: '1',
	// 		name: '销售',
	// 		imgSrc: 'image/company-3.png',
	// 		companyName: '千度',
	// 		city: '上海',
	// 		industry: '互联网',
	// 		time: '2018-04-22 11:05'
	// 	},
	// 	{
	// 		id: '2',
	// 		name: 'WEB前端',
	// 		imgSrc: 'image/company-1.png',
	// 		companyName: '慕课网',
	// 		city: '北京',
	// 		industry: '互联网',
	// 		time: '2018-06-01 01:05'
	// 	}
	// ]
}])