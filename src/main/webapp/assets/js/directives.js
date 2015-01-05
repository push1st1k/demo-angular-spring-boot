var appDirectives = angular.module('appDirectives', []);

appDirectives.directive("callbackMessage", ['$timeout', function($timeout) {
    return {
        restrict: 'E',
        replace:true,
        scope:{
            message: '=msg',
            hideDelay: '@'
        },
        templateUrl: 'assets/partials/message.html',
        link : function(scope, element, attrs) {
            scope.message = {
                show:false,
                result:"Success",
                description:"Detailed info",
                class:"success"
            };

            scope.hideMessage = function() {
                scope.message.show=false;
            }

            var timeout = (attrs['hideDelay'] || 3)*1000;
            scope.$watch('message.show', function(newVal, oldVal, scope) {
                if (newVal) {
                    $timeout(scope.hideMessage, timeout);
                }
            });

        }
    };
}]);