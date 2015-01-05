var app = angular.module('testApp',['ngRoute', 'ngAnimate', 'appControllers', 'appServices', 'appDirectives']);

app.config(['$routeProvider',
    function($routeProvider) {
        $routeProvider.
            when('/users', {
                templateUrl: 'assets/partials/user-list.html',
                controller: 'UserListController'
            }).
            when('/users/new', {
                templateUrl: 'assets/partials/user-detail.html',
                controller: 'UserDetailController'
            }).
            when('/users/:userId', {
                templateUrl: 'assets/partials/user-detail.html',
                controller: 'UserDetailController'
            }).
            otherwise({
                redirectTo: '/users'
            });
    }]);

