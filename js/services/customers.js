
var custList = angular.module('custList', []);

custList.factory("customers", ["$http", function($http){
    return $http.get('ax/getCustomersList.json')
        .success(function(data) {
            return data;
        })
        .error(function(err) {
            return err;
        });
}]);
