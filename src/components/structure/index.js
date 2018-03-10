const Person = require('../../Person');

module.exports =  {
    template : require('./structure.template.html'),
    bindings : {
        structure: '='
    },
    controller :function StructureController(){
        this.addDirector = ()=>{
            let person = new Person();
            person.isDirector=true;
            this.structure.people.push(person);
        };
        this.addShareholder = ()=>{
            let person = new Person();
            person.isShareholder=true;
            this.structure.people.push(person);
        };
        this.addBeneficial = ()=>{
            let person = new Person();
            person.isBeneficial=true;
            this.structure.people.push(person);
        };
        this.removeDirector = ()=>{
            let index = this.structure.people.findIndex(p=>p.isDirector);
            if (index > -1) {
                 this.structure.people.splice(index, 1);
            }
        };
        this.removeShareholder = ()=>{
            let index = this.structure.people.findIndex(p=>p.isShareholder);
            if (index > -1) {
                 this.structure.people.splice(index, 1);
            }
        };
        this.removeBeneficial= ()=>{
            let index = this.structure.people.findIndex(p=>p.isBeneficial);
            if (index > -1) {
                 this.structure.people.splice(index, 1);
            }
        };
    }
}
