const Person = require('./Person');
const config = require('./config');
module.exports = function(){
    this.modal= {
        visible:false
    };
    this.toggleModal = ()=>{
        this.modal.visible=!this.modal.visible;
    };
    this.services = {
        cmpRegInEst:true,
        legAdrServ:false,
        authPersServ:false,
        accServ:false,
        bankAccOpen:false,
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
        directors:[],
        shareholders:[],
        beneficials:[]
    };
    this.question = {
        politicallyExposed:"No"
    };

    this.structure.addDirector = ()=>{
        if(this.structure.directors.length<10){
            this.structure.directors.push(new Person('director'));
        }
    };
    this.structure.addShareholder = ()=>{
        if(this.structure.shareholders.length<10){
            this.structure.shareholders.push(new Person('shareholder'));
        }
    };
    this.structure.addBeneficial = ()=>{
        if(this.structure.beneficials.length<10){
            this.structure.beneficials.push(new Person('beneficial'));
        }
    };
    this.structure.removeDirector = ()=>{
        this.structure.directors.pop();
    };
    this.structure.removeShareholder = ()=>{
        this.structure.shareholders.pop();
    };
    this.structure.removeBeneficial= ()=>{
        this.structure.beneficials.pop();
    };
};
