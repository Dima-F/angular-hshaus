const angular = require('angular');
require('angular-route');
require('angular-moment-picker');
const hshaus = angular.module('hshaus',['ngRoute','moment-picker']);
hshaus.config(['$routeProvider','$locationProvider',
    function config($routeProvider,$locationProvider) {
      $locationProvider.hashPrefix('!');
      $routeProvider.
        when('/', {
          template: `<div class="row">
                      <form ng-class="{attempted:main.reviewAttempt}" name="mainForm" novalidate>
                            <services services="main.services"></services>
                            <h4>APPLICANT</h4>
                            <person who="main.applicant"></person>
                            <company company="main.company"></company>
                            <structure structure="main.structure" applicant="main.applicant"></structure>
                            <question question="main.question"></question>
                            <p class="text-danger" ng-show="mainForm.$invalid && main.reviewAttempt">Please enter all required fields (with *) and check email and date fields format.</p>
                            <button class="btn btn-secondary btn-lg" ng-click="main.reviewAttempt=true; mainForm.$valid && main.showReview();">Review</button>
                      </form>
                  </div>`
        }).
        when('/review', {
            template:'<modal services="main.services" applicant="main.applicant" company="main.company" structure="main.structure" question="main.question" inv="main.inv"></modal>'
        }).
        when('/summary', {
          template: '<invoice inv="main.inv"></invoice>'
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
hshaus.component('invoice',require("./components/invoice"));

hshaus.controller("MainController",require('./mainController'));

