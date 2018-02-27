const Person = require('./Person');

module.exports = function(){
    this.services = [
        {
            key:'cmpRegInEst',
            value:true,
            description:'Company registration in Estonia'
        },
        {
            key:'legAdrServ',
            value:false,
            description:'Legal address service'
        },
        {
            key:'authPersServ',
            value:false,
            description:'Authorised contact person services'
        },
        {
            key:'accServ',
            value:false,
            description:'Accounting services'
        },
        {
            key:'bankAccOpen',
            value:false,
            description:'Bank account opening'
        },
        {
            key:'vatReg',
            value:false,
            description:'VAT registration'
        }
    ];
    
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
