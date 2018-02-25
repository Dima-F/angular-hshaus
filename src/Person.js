const uuid = require('uuid/v4');
function Person(mainPost){
    this.mainPost = mainPost;
    //this.isDirector=this.mainPost==="director";
    this.isDirector = true;
    this.isShareholder=this.mainPost==="shareholder";
    this.isBeneficial=this.mainPost==="beneficial";
    this.isApplicant=this.mainPost==="applicant";

    this.fullName="some full name";
    this.dob=undefined;
    this.taxResidency="";
    this.residentalAddress="";
    this.numbOfShares=undefined;
    this.postCode=undefined;
    this.city="";
    this.country=undefined;
    this.email="";
    this.phone=undefined;
};
Person.prototype.isInCompany = function(){
    return this.isDirector || this.isShareholder || this.isBeneficial;
};
Person.prototype.getHeader = function(){
    return this.mainPost.toUpperCase();
};

module.exports = Person;
