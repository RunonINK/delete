
var custDetail = angular.module('custDetail', []);

custDetail.factory("custdetail", ["$http", function($http){
    return $http.get('ax/getCustomersList.json')
        .success(function(data) {
            return data;
        })
        .error(function(err) {
            return err;
        });
}]);
