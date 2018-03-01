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
    controller:['$http','$window',function ModalController($http,$window) {
        this.submit = ()=>{
            this.ok="";
            this.error="";
            let data = {};
            data.services=this.services;
            data.applicant = this.applicant;
            data.company = this.company;
            data.structure = this.structure;
            data.question = this.question;
            var self=this;
            $http.post(config.url, data).then(
                   function(){
                     self.showOK();
                     setTimeout(()=>{
                         $window.location = '/';
                     },3000);
                   }, 
                   function(){
                     self.showError();
                   }
            );
        };
        this.showError = ()=>{
            this.error="Remote server is not responding!";
            this.ok="";
        };
        this.showOK = ()=>{
            this.error="";
            this.ok="Success!";
        };
    }]
}