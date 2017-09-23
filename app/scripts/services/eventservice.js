'use strict';

/**
 * @ngdoc service
 * @name yoobikwitiApp.eventService
 * @description
 * # eventService
 * Service in the yoobikwitiApp.
 */
angular.module('yoobikwitiApp')
  .service('eventService', function ($resource) {
  return $resource('', null, {
    getEventResult: {
      url: "https://rest.bandsintown.com/artists/:key/events?app_id=test",
      method: 'GET',
      isArray:true,
      params: {
        key: "@key"
      }
    }
  })
});
