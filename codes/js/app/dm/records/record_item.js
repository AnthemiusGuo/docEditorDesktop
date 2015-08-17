var Record = require('../base/record.js');
var Record_item = Record.extend({
    init: function() {
        this._super('item');
        this.title_create = '道具';
        // this.deleteCtrl = 'amanagement';
        // this.deleteMethod = 'doDeleteOrg';
        // this.edit_link = 'amanagement/editOrg/';
        // this.info_link = 'amanagement/infoOrg/';
        this.field_mapping = {
            'id': {
                typ: 'field_string',
                show_name: 'id',
                db_id: 0,
                must: true
            },
            'name': {
                typ: 'field_string',
                show_name: '名称',
                db_id: 1,
                must: true
            },
            'color': {
                typ: 'field_string',
                show_name: '颜色',
                db_id: 2,
                must: true
            },
        }
        this.loadFields();
    }

});
module.exports = Record_item;
