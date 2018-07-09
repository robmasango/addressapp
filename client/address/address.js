angular.module('address-app.active', [])

.controller('ActiveAddressesController', function ($scope, $location, $route, Addresses) {
  $scope.data = {};

  $scope.getAddresses = function() {
    Addresses.getActive()
      .then(function(activeAddresses) {
        $scope.data.addresses = activeAddresses;
        $scope.count = $scope.data.addresses.length;
      })
      .catch(function(error) {
        console.error(error);
      });
  };

  $scope.getAddresses();

  $scope.addAddress = function(address) {
    $scope.country = "South Africa";
    $scope.loading = true;
    Addresses.addAddress({
      streetaddress: address.streetaddress,
      city: address.city,
      country: $scope.country,
      postalcode: address.postalcode,
      createdAt: new Date(),      
      deleted: false,
      status: true
    })
      .then(function() {
        $scope.loading = false;
        $route.reload();
      })
      .catch(function(error) {
        console.error(error);
      });
  };

  $scope.setDeletedAddress = function(address) {
    address.deleted = true;
    Addresses.updateAddress(address)
      .then(function() {
        $route.reload();
      })
      .catch(function(error) {
        console.error(error);
      });
  };

  $scope.deleteAddress = function(address) {
    console.dir(address);
    Addresses.deleteAddress(address)
      .then(function() {
        $route.reload();
      })
      .catch(function(error) {
        console.error(error);
      });
  };

  $scope.name = 'ActiveAddressesController';
});
