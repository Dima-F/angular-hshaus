module.exports = class Person {
    constructor(){
        this.isDirector = false;
        this.isShareholder = false;
        this.isBeneficial = false;
        this.isApplicant = false;

        this.fullName="";
        this.dob="";
        this.taxResidency="";
        this.residentalAddress="";
        this.numbOfShares="";
        this.postCode="";
        this.city="";
        this.country="";
        this.email="";
        this.phone="";
    }
    isInCompany(){
        return this.isDirector || this.isShareholder || this.isBeneficial;
    }
};
