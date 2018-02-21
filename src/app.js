var angular = require('angular');
require('angular-route');
var hshaus = angular.module('hshaus',['ngRoute']);

hshaus.config(['$locationProvider', '$routeProvider',
    function config($locationProvider, $routeProvider) {
      $locationProvider.hashPrefix('!');

      $routeProvider.
        when('/', {
          template: '<h1>First template</h1>'
        }).
        when('/phones', {
          template: '<phone-list></phone-list>'
        }).
        when('/error', {
          template: '<error-view></error-view>'
        }).
        otherwise('/');
    }
  ]);
  
  hshaus.component('phoneList',require("./phone-list"));
  hshaus.component('errorView',require("./error"));