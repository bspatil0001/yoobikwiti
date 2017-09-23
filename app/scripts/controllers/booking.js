'use strict';

/**
 * @ngdoc function
 * @name yoobikwitiApp.controller:BookingCtrl
 * @description
 * # BookingCtrl
 * Controller of the yoobikwitiApp
 */
angular.module('yoobikwitiApp')
  .controller('BookingCtrl', function ($scope, $stateParams) {

    var id = $stateParams.id;
    // var storedData = [];
    var storedData = JSON.parse(localStorage.getItem("bookinginfo"));

    $scope.userInfo = {
      "name": "",
      "dob": "",
      "email": "",
      "id": id
    }

    $scope.bookMyTicket = function(){
      if(storedData){
        storedData.push($scope.userInfo);
      }
      else{
          storedData = [];
          storedData.push($scope.userInfo)
      }
      localStorage.setItem("bookinginfo", JSON.stringify(storedData));
    }
  });
