var angular = require('angular');
require('angular-route');
var hshaus = angular.module('hshaus',['ngRoute']);

hshaus.config(['$locationProvider', '$routeProvider',
    function config($locationProvider, $routeProvider) {
      $locationProvider.hashPrefix('!');

      $routeProvider.
        when('/company', {
          template: '<company-reg></company-reg>'
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
  //hshaus.component('errorView',require("./error"));
  //hshaus.component('companyReg',require("./company"));
