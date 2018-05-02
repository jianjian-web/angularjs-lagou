angular.module('app').value('dict', {}).run(function () {
	dict = '123468'
})
angular.module('app').run(function () {
	console.log('run')
})
angular.module('app').config(function () {
	console.log('config')
})