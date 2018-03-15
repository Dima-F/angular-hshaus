const Person = require('./Person');
const Structure = require('./Structure');
const config = require('./config');

module.exports = ['$location','$scope', function($location, $scope){
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
    /*
    //now lets add one director, beneficial and shareholder to structure
    let firstDirector = new Person();
    firstDirector.isDirector=true;
    this.structure.people.push(firstDirector);
    let firstBeneficial = new Person();
    firstBeneficial.isBeneficial=true;
    this.structure.people.push(firstBeneficial);
    let firstShareholder = new Person();
    firstShareholder.isShareholder=true;
    this.structure.people.push(firstShareholder);
    */
    this.question = {
        politicallyExposed:"No"
    };
    this.inv = {};
    
    
    this.reviewAttempt = false;

    this.showReview = ()=>{
        $location.path('/review');
    };
}];
