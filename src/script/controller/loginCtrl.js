angular.module('app').controller('loginCtrl', ['$scope', '$state',function ($scope, $state) {
    console.log('login')
    $scope.formData = {
        name: '',
        password: ''
    };
    $scope.handleLogin = function () {
        console.dir($scope.formData)
        $state.go('main')
    }
    $scope.handleReset = function () {
        $scope.formData = {
            name: '',
            password: ''
        }
    }
}])