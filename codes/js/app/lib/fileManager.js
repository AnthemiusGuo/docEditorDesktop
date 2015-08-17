var FileManager = Class.extend({
	init : function(config){
        this.config = config;
	},
	loadFile : function(){
		gFront.domClear('#fileList');
		for (var k in this.config.files){
			var v = this.config.files[k];
			var fileName = v.fileName;

			var workbook = XLSX.readFile(fileName);

			var first_sheet_name = workbook.SheetNames[0];
			var worksheet = workbook.Sheets[first_sheet_name];
			var range = XLSX.utils.decode_range(worksheet['!ref']);

			var LM = require('../dm/base/list.js');

			// var LM = require(APPPATH + 'dm/base/list.js');
			var listModel = new LM(k,fileName,v.dataModel);
			gDmManager.addList(k,fileName,listModel);

			var data = [];
			for(var R = range.s.r; R <= range.e.r; ++R) {
				if (R<v.skipLine){
					if (R==v.titleLine){
						//数据格式列
					}
					//啥都不做
					continue;
				}

				var line = [];
			  	for(var C = range.s.c; C <= range.e.c; ++C) {
					var cell_address = XLSX.utils.encode_cell({c:C, r:R});
					var cell_value = worksheet[cell_address].v;
					line.push(cell_value);
			  	}
				data.push(line);
			}
			listModel.load_data_with_data(data);
			gFront.tableInsert("#fileList",k,[fileName,k,'已导入','']);
		}
	}

} );

module.exports = FileManager;
