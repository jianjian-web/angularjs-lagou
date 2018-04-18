angular.module('app').controller('loginCtrl', ['$scope',function ($scope) {
    console.log('login')
    $scope.formData = {
        name: '',
        password: ''
    }
}])