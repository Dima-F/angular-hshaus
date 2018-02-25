const angular = require('angular');
require('angular-countries');
const hshaus = angular.module('hshaus',['ngCountries']);
//require('./css/company_registration.css');

hshaus.component('services',require("./components/services"));
hshaus.component('person',require("./components/person"));
hshaus.component('company',require("./components/company"));
hshaus.component('question',require("./components/question"));
hshaus.component('modal',require("./components/modal"));

hshaus.controller("MainController", require('./mainController'));
