angular.module('address-app.factories', [])

.factory('Addresses', function ($http) {

  var getActive = function() {
    return $http({
      method: 'GET',
      url: '/api/address'
    })
    .then(function(resp) {
      return resp.data;
    });
  };

  var getDeleted = function() {
    return $http({
      method: 'GET',
      url: '/api/deleted'
    })
    .then(function(resp) {
      return resp.data;
    });
  };

  var addAddress = function(address) {
    return $http({
      method: 'POST',
      url: '/api/address',
      data: address
    });
  };

  var updateAddress = function(data) {
    return $http({
      method: 'PUT',
      url: '/api/address',
      data: data
    });
  };

  var deleteAddress = function(address) {
    return $http({
      method: 'POST',
      url: '/api/delete',
      data: address
    });
  };

  return {
    getActive: getActive,
    getDeleted: getDeleted,
    addAddress: addAddress,
    updateAddress: updateAddress,
    deleteAddress: deleteAddress
  };
});
