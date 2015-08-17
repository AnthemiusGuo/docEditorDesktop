var Field = Class.extend({
    init: function(show_name, name, is_must_input) {
        this.show_name = show_name;
        this.name = name;
        this.default = "";
        this.placeholder = "";
        this.is_must_input = is_must_input;
        this.value = 0;
        this.input_class = "form-control";
        this.special_search_element = "";
        this.is_title = false;
        this.min_len = 0;
        this.is_fullInited = false;
    },
    init_data: function(value) {
        this.is_fullInited = true;
        this.value = value;
    }

    ,
    baseInit: function(value) {
        this.value = value;
    },
    in_array: function(arr) {
        return in_array(this.value, arr);
    },

    gen_show_name: function() {

    },
    gen_editor_show_name: function() {


    },
    gen_search_editor: function(){


    },
    gen_search_element: function(){

    },
    gen_list_html: function(len) {

    },
    gen_show_value: function() {
        return this.value;
    },
    toString: function() {
        return this.value.toString();
    }

    ,
    gen_front_show_html: function() {
        return this.gen_show_value();
    }

    ,
    gen_show_html: function() {
        return this.value;
    },
    gen_js_value: function() {
        return this.value;
    },
    gen_editor: function() {

    },
    check_data_input: function(input) {
        if (input === '') {
            return false;
        }
        return true;
    },
    setPlaceHolder: function(placeholder) {
        this.placeholder = placeholder;
    },
    setDefault: function(defaultv) {

    },
    build_input_name: function(typ) {

    },

    build_validator: function(need_require_validator) {

    },
    gen_value: function(input) {
        return input;
    },
    gen_value_from_front: function(input) {
        return this.gen_value(input);
    },
    gen_search_result_show: function(value) {
        return value;
    },
    gen_search_result_id: function(value) {
        return value;

    },
    checkImportData: function(value) {
        return 1;
    }

    ,
    importData: function(value) {
        return value;
    }
});
module.exports = Field;
