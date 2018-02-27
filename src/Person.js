function Person(mainPost){
    this.mainPost = mainPost;
    //this.isDirector=this.mainPost==="director";
    this.isDirector = this.mainPost==="director";
    this.isShareholder = this.mainPost==="shareholder";
    this.isBeneficial = this.mainPost==="beneficial";
    this.isApplicant = this.mainPost==="applicant";

    this.fullName="";
    this.dob="";
    this.taxResidency=null;
    this.residentalAddress="";
    this.numbOfShares="";
    this.postCode="";
    this.city="";
    this.country=null;
    this.email="";
    this.phone="";
};
Person.prototype.isInCompany = function(){
    return this.isDirector || this.isShareholder || this.isBeneficial;
};
Person.prototype.isShown = function(post){
    switch(post){
        case 'director': return !(this.mainPost=="director");
        case 'shareholder': return !(this.mainPost=="shareholder");
        case 'beneficial':return !(this.mainPost=="beneficial");
        default:return true;
    }
}
Person.prototype.getHeader = function(){
    if(this.isApplicant){
        return this.mainPost.toUpperCase();
    } else {
        return this.mainPost.charAt(0).toUpperCase() + this.mainPost.slice(1);
    }

};

module.exports = Person;
