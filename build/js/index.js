angular.module('app', ['ui.router'])
angular.module('app').config(['$stateProvider', '$urlRouterProvider',function ($stateProvider, $urlRouterProvider) { // 依赖如果不传则会使用之前的，但是如果传空，则会覆盖之前的依赖。比如angular.module('app', [])会覆盖app.js中传入的依赖
    $stateProvider.state('main', {
        url: '/main',
        templateUrl: 'view/main.html'
      }).state('login', {
          url: '/login',
          templateUrl: 'view/login.html'
      })
      $urlRouterProvider.otherwise('login');
}])