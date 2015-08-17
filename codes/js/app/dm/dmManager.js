var DmManager = Class.extend({
	init : function(){
        this.listMapping = {};
	},
    addList : function(name,fileName,listModel){
        this.listMapping[name] = {file:fileName,list:listModel};
    }

} );

module.exports = DmManager;
