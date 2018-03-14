
module.exports =  {
    template:require('./invoice.template.html'),
    bindings: {
        inv: '='
    },
    controller: function InvoiceController(){
        this.getFormatedDate = ()=>{
            return moment(this.inv.company.date).format('LL');
        }
        this.getFormatedDueDate = ()=>{
            return moment(this.inv.company.dueDate).format('LL');
        }
    }
}