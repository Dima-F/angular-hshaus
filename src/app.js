const angular = require('angular');
require('angular-countries');
const hshaus = angular.module('hshaus',['ngCountries']);
require('./css/my.css');
require('./css/radio.css');
require('./css/checkbox.css');

hshaus.component('services',require("./components/services"));
hshaus.component('person',require("./components/person"));
hshaus.component('company',require("./components/company"));
hshaus.component('structure',require("./components/structure"));
hshaus.component('question',require("./components/question"));
hshaus.component('modal',require("./components/modal"));

hshaus.controller("MainController",require('./mainController'));
