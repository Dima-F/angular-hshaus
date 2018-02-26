const Person = require('./Person');

module.exports = function(){
    this.services = {
        cmpRegInEst:true,
        legAdrServ:false,
        authPersServ:false,
        accServ:false,
        bankAccOpen:false,
        vatReg:false
    };
    this.applicant = new Person('applicant');
    this.company = {
        option1:"",
        option2:"",
        option3:"",
        activity:"",
        location:"",
        country:"",
        turnover:""
    };
    this.structure = {
        directors:[new Person('director'),new Person('director')],
        shareholders:[],
        beneficials:[]
    };
    this.question = {
        politicallyExposed:"No"
    }
};
