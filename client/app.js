angular.module('address-app', [
  'address-app.factories',
  'address-app.active',
  'address-app.deleted',
  'ngRoute'
])
.config(function ($routeProvider) {
  $routeProvider
  .when('/', {
    templateUrl: './address/address.html',
    controller: 'ActiveAddressesController'
  })
  .when('/address', {
    templateUrl: './address/address.html',
    controller: 'ActiveAddressesController'
  })
  .when('/deleted', {
    templateUrl: './deleted/deleted.html',
    controller: 'DeletedAddressesController'
  })
  .otherwise({
    redirectTo: '/address'
  });
});
