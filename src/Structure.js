module.exports = class Structure {
    constructor(){
        this.people=[];
    }
    getAllDirectors(){
        return this.people.filter(p=>p.isDirector);
    };
    getAllShareholders(){
        return this.people.filter(p=>p.isShareholder);
    };
    getAllBeneficials(){
        return this.people.filter(p=>p.isBeneficial);
    };
    getAllDirectorsCount(){
        return this.people.filter(p=>p.isDirector).length;
    };
    getAllShareholdersCount(){
        return this.people.filter(p=>p.isShareholder).length;
    };
    getAllBeneficialsCount(){
        return this.people.filter(p=>p.isBeneficial).length;
    };
}
