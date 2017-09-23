'use strict';

/**
 * @ngdoc function
 * @name yoobikwitiApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the yoobikwitiApp
 */
angular.module('yoobikwitiApp').controller('MainCtrl', function($scope, eventService) {

  $scope.countries = [];

  $scope.getResult = function() {
    if ($scope.searchKey.length > 1)
      eventService.getEventResult({
        key: $scope.searchKey
      }, {}, function(data) {
        if (data.length > 0) {
          $scope.eventsData = data.map(i => {
            console.log(i.offers.length && i.offers[0].status == 'available');
            if(i.offers.length && i.offers[0].status == 'available'){
              i.status = true;
            }
            else{
              i.status = false;
            }
            return i
          })
          console.log($scope.eventsData);
          $scope.filteredEvent = $scope.eventsData;

          var tempCountry = $scope.eventsData.map(i => {
            return i.venue.country;
          })

          $scope.countries = tempCountry.filter(function(item, pos) {
            return tempCountry.indexOf(item) == pos;
          });

          console.log("country", $scope.countries);
        }
      })
  }


  $scope.filterData = function(id){
    if(id){
      $scope.filteredEvent = $scope.eventsData.filter(i => {
        if(i.venue.country == id){
            return i;
        }
      })
    }
    else{
      $scope.filteredEvent = $scope.eventsData;
    }
  }
});
