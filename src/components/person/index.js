module.exports =  {
    template:require('./person.template.html'),
    controller: ['$http','$element',function PersonController($http, $element) {
            this.mainPost = $element.attr("mainPost");
            this.isDirector=this.mainPost==="director";
            this.isShareholder=this.mainPost==="shareholder";
            this.isBeneficial=this.mainPost==="beneficial";
            this.isApplicant=this.mainPost==="applicant";
            
            this.fullName="";
            this.dob=null;
            this.taxResidency="";
            this.residentalAddress="";
            this.numbOfShares=null;
            this.postCode=null;
            this.city="";
            this.country=null;
            this.email="";
            this.phone=null;
            
            this.isInCompany = ()=>{
                return this.isDirector || this.isShareholder || this.isBeneficial;
            }
            
            this.getHeader = ()=>{
                return this.mainPost.toUpperCase();
            }
        }
    ]
}