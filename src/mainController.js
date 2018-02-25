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
    this.director = new Person('director');
};
