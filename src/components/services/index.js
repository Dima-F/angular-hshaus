module.exports =  {
    template:require('./services.template.html'),
    controller: function ServicesController() {
        this.services = {
            cmpRegInEst:true,
            legAdrServ:false,
            authPersServ:false,
            accServ:false,
            bankAccOpen:false,
            vatReg:false
        }
    }
}