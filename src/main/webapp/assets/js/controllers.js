var appControllers = angular.module('appControllers', []);

function BasicController($scope) {

    $scope.showMessage = function (success, description) {
        $scope.message = {
            show:true,
            result:success ? "Success!" : "Warning!",
            description:description,
            class:success ? 'success' : 'danger'}
    }
}

function isValidUser(user) {
    if (!user.name || !user.age || !user.sex) {
        return false;
    }
    return true;
}

appControllers.controller('UserListController', ['$scope', '$location', 'User', function($scope, $location, User) {
    new BasicController($scope);
    $scope.users = User.query();

    $scope.addUser = function() {
        $location.path('users/new');
    }
    $scope.deleteUser = function(user) {
        User.delete({'id':user.id}, function() {
            var index = $scope.users.indexOf(user);
            $scope.users.splice(index, 1);
            $scope.showMessage(true, "User "+ user.name +" was deleted successfully!");
        })
    }
}]);

appControllers.controller('UserDetailController', ['$scope', 'User', '$routeParams', '$location', function($scope, User, $routeParams, $location) {
    new BasicController($scope);

    if ($routeParams.userId) {
        $scope.buttonText = 'Update';
        User.get({'id' :$routeParams.userId}, function(data) {
            $scope.user = data;
            $scope.userId = data.id;
        });

        $scope.update = function(user) {
            if (isValidUser(user)) {
                User.update({'id' : $scope.userId}, user, function(data) {
                    $scope.showMessage(true, "User "+ data.name +" was updated successfully!");
                });
            } else {
                $scope.showMessage(false, "Please fill all required fields!");
            }
        }
    } else {
        $scope.buttonText = 'Save';
        $scope.user = {};
        $scope.update = function(user) {
            if (isValidUser(user)) {
                User.save({}, user, function (data) {
                    $location.path('users/' + data.id);
                    $scope.showMessage(true, "User " + data.name + " was created successfully!");
                });
            } else {
                $scope.showMessage(false, "Please fill all required fields!");
            }
        }
    }
}]);