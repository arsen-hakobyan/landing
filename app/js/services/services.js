module.exports = function($http, $q) {
var baseUrl = 'http://localhost:8088/web/rest';


    this.findUserById = function(userId) {
        var deferred = $q.defer();
        $http.get(baseUrl + '/users/id/' + userId).success(deferred.resolve).error(deferred.reject);
        return deferred.promise;
    };


};