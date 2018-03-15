module.exports =  {
    template:require('./person.template.html'),
    bindings: {
        who: '='
    },
    controller: function PersonController(){
        this.countryList = require('../../country-list');
    }
}
