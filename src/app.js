const angular = require('angular');
require('angular-countries');
require('angular-route');
const hshaus = angular.module('hshaus',['ngCountries','ngRoute']);
hshaus.config(['$routeProvider','$locationProvider',
    function config($routeProvider,$locationProvider) {
      $locationProvider.hashPrefix('!');
      $routeProvider.
        when('/', {
          template: `<div class="row">
                      <form class="needs-validation" name="mainForm" novalidate>
                            <services services="main.services"></services>
                            <person who="main.applicant"></person>
                            <company company="main.company"></company>
                            <structure structure="main.structure"></structure>
                            <question question="main.question"></question>
                            <p class="text-danger" ng-show="mainForm.$invalid">To enable submit button, please enter all required fields (with *) and check email and date fields validation!</p>
                            <button class="btn btn-secondary btn-lg" type="submit" data-toggle="modal" data-target="#myModal" ng-disabled="mainForm.$invalid">Submit</button>
                      </form>
                  </div>
                  <modal services="main.services" applicant="main.applicant" company="main.company" structure="main.structure" question="main.question" sendData="main.sendData"></modal>`
        }).
        when('/error', {
          template: '<h1>Error</h1>'
        }).
        otherwise('/');
    }
  ]);



require('./css/my.css');
require('./css/radio.css');
require('./css/checkbox.css');
require('./css/modal.css');

hshaus.component('services',require("./components/services"));
hshaus.component('person',require("./components/person"));
hshaus.component('company',require("./components/company"));
hshaus.component('structure',require("./components/structure"));
hshaus.component('question',require("./components/question"));
hshaus.component('modal',require("./components/modal"));

hshaus.controller("MainController",require('./mainController'));
