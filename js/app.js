'use strict';

/* App Module */

var mpointApp = angular.module('mpointApp', [
 // 'phonecatAnimations',
  'custList',
 // 'custDetail',
  'mpointControllers',
 // 'checkmarkFilters',
  //'phonecatServices'
    'ui.router'
]);
/*
mpointApp.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
      when('/customers', {
        templateUrl: 'partials/customer-list.html',
        controller: 'CustomersList'
      }).
        otherwise({
        redirectTo: '/customers'
      });
  }]);

*/
mpointApp.config(function($stateProvider, $urlRouterProvider) {

  $urlRouterProvider.otherwise('/customers');

  $stateProvider

    // HOME STATES AND NESTED VIEWS ========================================
      .state('customers', {
        url: '/customers',
        templateUrl: 'partials/customer-list.html',
          controller: 'CustomersList'
      })


      .state('cust', {
          url: '/customers/:custacc',
          templateUrl: 'partials/phone-detail.html',
          controller: function ($scope, customers, $stateParams) {
              customers.success(function (data) {

                  for(var i = 0; i < data.Customers.CustomerList.length; i++) {
                      if(data.Customers.CustomerList[i].custAcc === $stateParams.custacc) {
                           $scope.id = i;


                      }
                  }

                  $scope.customer = data.Customers.CustomerList[$scope.id];


              })


          }
})




/*
    // ABOUT PAGE AND MULTIPLE NAMED VIEWS =================================
      .state('home.paragraph',{
        url: '/paragraph',
        template: 'I could sure use a drink right now.'

      })

      .state('about',{
        url: '/about',
        views: {
          '': { templateUrl: 'partials/partial-about.html' },
          'columnOne@about': { template: 'Look I am a column!' },
          'columnTwo@about': {
            templateUrl: 'partials/table-data.html',
            controller: 'scotchController'
          }
        }
      })
*/
});