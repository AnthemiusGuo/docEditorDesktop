var List = Class.extend({
	init : function(name,tableName,dataModelName){
        this.name = name;
        this.tableName = tableName;
        this.dataModelName = dataModelName;
        this.record_list = {};
        this.record_count = 0;

	},
    load_data_with_data: function(data){
        var DM = require('../records/'+this.dataModelName+'.js');
        var rc = 0;
        for (var k in data){
            rc++;
            this.record_list[k] = new DM();
            this.record_list[k].init_with_data(k,data[k]);
        }
        this.record_count = rc;
    }

} );

module.exports = List;
