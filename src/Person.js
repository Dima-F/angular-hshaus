const uuid = require('uuid/v4');
function Person(mainPost){
    this.mainPost = mainPost;
    //this.isDirector=this.mainPost==="director";
    this.isDirector = true;
    this.isShareholder=this.mainPost==="shareholder";
    this.isBeneficial=this.mainPost==="beneficial";
    this.isApplicant=this.mainPost==="applicant";

    this.fullName="some full name";
    this.dob="1";
    this.taxResidency="2";
    this.residentalAddress="some residental address";
    this.numbOfShares="5";
    this.postCode="3";
    this.city="4";
    this.country=null;
    this.email="6";
    this.phone="7";
};
Person.prototype.isInCompany = function(){
    return this.isDirector || this.isShareholder || this.isBeneficial;
};
Person.prototype.isShown = function(post){
    return post!==this.mainPost;
}
Person.prototype.getHeader = function(){
    return this.mainPost.toUpperCase();
};

module.exports = Person;
