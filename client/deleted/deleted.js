angular.module('address-app.deleted', [])

.controller('DeletedAddressesController', function ($scope, $location, $route, Addresses) {
  $scope.data = {};

  $scope.getAddesses = function() {
    Addresses.getDeleted()
    .then(function(deletedAddresses) {
      $scope.data.addresses = deletedAddresses;
      $scope.count = $scope.data.addresses.length;
    })
    .catch(function(error) {
      console.error(error);
    });
  };


  $scope.getAddesses();

  $scope.editAddress = function(address) {
    address.deleted = false;    
    Addresses.updateAddress(address)
      .then(function() {
        $route.reload();
      })
      .catch(function(error) {
        console.error(error);
      });
  };

  $scope.deleteAddress = function(address) {
    Addresses.deleteAddress(address)
      .then(function() {
        $route.reload();
      })
      .catch(function(error) {
        console.error(error);
      });
  };

  $scope.name = 'DeletedAddressesController';
});
