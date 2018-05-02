angular.module('app').filter('filterJob', [function () {
	return function (data, key) {
		if (!data || !key) return data
		// console.dir(data)
		// console.log(key)
		return data.filter(function (item) {
			if (item && item.job && item.companyName && item.cityName) {
				var indexValue = -1
				var arr = Object.assign([], [item.job, item.companyName, item.cityName])
				arr.forEach(function (element) {
					console.log(element)
					console.log(element.indexOf(key) >= 0)
					if (element.indexOf(key) >= 0) {
						indexValue = 1
						return
					}
				});
				if (indexValue > 0) {
					return true
				} else {
					return false
				}
			}
		})
	}
}])