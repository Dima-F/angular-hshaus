const Person = require('./Person');
const Structure = require('./Structure');
const config = require('./config');
module.exports = ['$location', function($location){
    this.services = {
        cmpRegInEst:true,
        legAdrServ:false,
        authPersServ:false,
        accServ:false,
        bankAccOpen:false,
        bankAccOpen:false,
        vatReg:false
    };
    this.applicant = new Person();
    this.applicant.isApplicant=true;
    this.company = {
        option1:"",
        option2:"",
        option3:"",
        activity:"",
        location:"",
        country:"",
        turnover:""
    };
    this.structure = new Structure();
    this.question = {
        politicallyExposed:"No"
    };
    this.inv = {};
    this.showReview = ()=>{
        $location.path('/review');
    };
}];
