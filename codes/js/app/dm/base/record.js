var Record = Class.extend({
    init : function(tableName){
        this.title_create= tableName;
        this.tableName = tableName;

        this.field_list = {};

        this.errData = '';
        this.relateTableName = {};
        this.relateIdName = 'null';

        this.default_is_lightbox_or_page = true;
        this.lastError = {'err':false,'errNo':0,'id':"",'msg':""};

        this.deleteCtrl = '';
        this.deleteMethod = '';
        this.edit_link = '';
        this.info_link = '';
        this.id_is_id = true;//id字段是mongoid对象还是字符串
        this.none_field_data = {};
        this.is_inited = false;
        this.data = {};
        this.is_only_brief_fields = false;
        this.brief_fields = {};
        this.field_mapping = {};
        this.db_id_mapping = {};
    },
    loadFields:function(){
        for (var k in this.field_mapping){
            var v = this.field_mapping[k];
            this.db_id_mapping[v.db_id] = k;
            //'id':{typ:'Field_string',show_name:'id',db_id:0},
            var Field = require('../fields/'+v.typ+'.js');
            this.field_list[k] = new Field(v.show_name, k, v.must);


        }
    },

    gen_list_html:function(){

    },
    gen_editor:function(){

    },
    buildInfoTitle:function(){

    },
    check_data:function(data,strict){

    },
    get_error_field:function(){
       return this.error_field;
    },
    reset:function(){
       for (var key in this.field_list) {
           this.field_list[key].init("");
       }
   },

  init_with_data:function(id,data){
       this.id = id;
       this.data = data;

       for (var key in data) {
           value = data[key];
           is_inited = false;
           if (F.isset(this.db_id_mapping[key])){
               var field_name = this.db_id_mapping[key];
               this.field_list[field_name].init_data(value);
           }
       }

       if (F.isset(data['name'])){
           this.name = data['name'];
       }
       this.is_inited = true;
    },
    gen_op_view:function(){

    },
    gen_op_edit:function(){

    },
    gen_op_delete:function(){

    },
    get_list_ops:function(){

    },
    get_info_ops:function(){
    },
    gen_list_op:function(){

    },
    insert_db:function(data){

    },
    delete_db:function(ids){

    },
    delete_db_where:function(where_array){
    },
    check_can_delete:function(){
       return true;
    },
    delete_related:function(ids){

    },
    update_db:function(data,id){

    },
    buildChangeNeedFields:function(arr_plus){

    },
    setError:function(errNo,msg,id){
       this.lastError['err'] = true;

       this.lastError['errNo'] = errNo;
       this.lastError['id'] = id;
       this.lastError['msg'] = msg;
    },
    getLastError:function(){
       if (!this.lastError['err']){
           return {'errNo':0,'msg':'未知错误'};
       }
       return {'errNo':this.lastError['errNo'],'id':this.lastError['id'],'msg':this.lastError['msg']};
    }

});
module.exports = Record;
