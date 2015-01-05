var appServices = angular.module('appServices', ['ngResource']);

appServices.factory("User", ['$resource', function($resource) {
    return $resource("/rest/users/:id", null,
        {
            'update': { method:'PUT' }
        });
}]);