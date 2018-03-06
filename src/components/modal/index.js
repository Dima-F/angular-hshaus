const config = require('../../config');
module.exports =  {
    template:require('./modal.template.html'),
    bindings: {
        services: '=',
        applicant: '=',
        company: '=',
        structure: '=',
        question: '=',
        modal: '='
    },
    controller:['$http','$window','$location','$rootScope',function ModalController($http, $window, $location, $rootScope) {
        this.response="";
        
        this.submit = ()=>{
            let data = {};
            data.services=this.services;
            data.applicant = this.applicant;
            data.company = this.company;
            data.structure = this.structure;
            data.question = this.question;
            $http.post(config.url, data).then(
                   ()=>{
                     this.response="ok";
                     /*
                     setTimeout(()=>{
                         //$window.location.href = '!#error';
                         $location.path('/error');
                         $rootScope.apply();
                     },3000);
                     */
                   }, 
                   ()=>{
                     this.response="error";
                   }
            );
        };
        
        this.close = ()=>{
            this.response="";
            this.modal.visible=false;
        }
    }]
}