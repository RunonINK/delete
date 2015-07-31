
var prodList = angular.module('prodList', []);

prodList.factory("products", ["$http", function($http){
    return $http.get('ax/getItems.json')
        .success(function(data) {
            return data;
        })
        .error(function(err) {
            return err;
        });
}]);
