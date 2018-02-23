module.exports =  {
    template:require('./company.template.html'),
    controller: function CompanyController() {
        this.option1="test option";
        this.option2="";
        this.option2="";
        this.businessActivity = {
            activity:"",
            location:"",
            country:"Ukraine",
            turnover:""
        }
    }
}
