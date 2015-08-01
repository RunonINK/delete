'use strict';

/* Controllers */

var mpointControllers = angular.module('mpointControllers', []);

/* Customers */

mpointControllers.controller('CustomersList', ['$scope', 'customers', function($scope, customers) {
    customers.success(function(data) {
        $scope.customers = data;
    });


    $scope.predicate = 'CustAcc';
    $scope.reverse = true;
    $scope.order = function(predicate) {
        $scope.reverse = ($scope.predicate === predicate) ? !$scope.reverse : false;
        $scope.predicate = predicate;
    };



}]);
/*
mpointControllers.controller('CustomerDetail', ['$scope', 'customers', '$stateParams', function($scope, customers, $stateParams) {
    customers.success(function(data) {
        $scope.customers = $stateParams.this.cust;
    });

    }]);



/* Products */
/*
mpointControllers.controller('Products', ['$scope', 'products', function($scope, products) {
    products.success(function(data) {
        $scope.prods = data;
    });

}]);


mpointControllers.controller('ProductDetail', ['$scope', '$routeParams','products', function($scope, $routeParams, products) {
    products.success(function (data) {
        $scope.product = data.Items.Item[$routeParams.id];
        $scope.num = $routeParams.id;
    });

    $scope.getBlocked = function(ass){
        if (ass == "1" || ass == '2'){
            return true;
        }
        else {
            return false;
        }
    }
}]);

/*
 phonecatControllers.controller('PhoneDetailCtrl', ['$scope', '$routeParams', 'Customer',
 function($scope, $routeParams, Customer) {
 $scope.customer = Customer.get({phoneId: $routeParams.phoneId}, function(phone) {
 $scope.mainImageUrl = phone.images[0];
 });

 $scope.setImage = function(imageUrl) {
 $scope.mainImageUrl = imageUrl;
 };
 }]);
 */