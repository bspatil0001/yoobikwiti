'use strict';

/**
 * @ngdoc overview
 * @name yoobikwitiApp
 * @description
 * # yoobikwitiApp
 *
 * Main module of the application.
 */
angular.module('yoobikwitiApp', ['ui.router', 'ngResource']).config([
  '$stateProvider',
  '$urlRouterProvider',
  '$locationProvider',
  function($stateProvider, $urlRouterProvider, $locationProvider) {
    $urlRouterProvider.otherwise('/');
    $stateProvider.state('home', {
      url: '/',
      templateUrl: './views/main.html',
      controller: 'MainCtrl'
    }).state('bookticket', {
      url : '/booking/:id',
      templateUrl : './views/booking.html',
      controller : 'BookingCtrl'
    })
  }])
