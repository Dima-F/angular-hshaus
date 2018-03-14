const config = require('../../config');
module.exports =  {
    template:require('./modal.template.html'),
    bindings: {
        services: '=',
        applicant: '=',
        company: '=',
        structure: '=',
        question: '=',
        inv: '='
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
               (res)=>{
                 this.response="ok";
                 Object.assign(this.inv, res.data);
               },
               (err)=>{
                 this.response="error";
               }
            );
        };
        this.close = ()=>{
            this.response="";
            $location.path('/');
        };
        this.formatDate = (stringDate)=>{
            if(!stringDate) return "";
            return moment(stringDate).format('DD/MM/YYYY');
        };
    }]
}
