angular.module('app').controller('loginCtrl', ['$scope', '$state',function ($scope, $state) {
    console.log('login')
    $scope.myParam = {
        name: 'zj',
        age: '25'
    };
    $scope.formData = {
        name: '',
        password: ''
    };
    $scope.handleLogin = function () {
        console.dir($scope.formData)
        $state.go('main', {param: JSON.stringify({name: 'zj', age: '25'})})
    }
    $scope.handleReset = function () {
        $scope.formData = {
            name: '',
            password: ''
        }
    }
}])