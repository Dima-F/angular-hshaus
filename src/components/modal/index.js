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
    controller:['$http','$location',function ModalController($http, $location) {
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
               }, 
               ()=>{
                 this.response="error";
               }
            );
        };
        this.close = ()=>{
            this.response="";
            $location.path('/');
        }
    }]
}