module.exports = function($scope, services) {
    $scope.userId=null;

    $scope.findUser = function(){
        services.findUserById($scope.userId).then(function(result) {
               $scope.user = (result !== null) ? result : null;
            }, function(reason) {
                console.log('Error', reason);
            }
        );
    };


};
