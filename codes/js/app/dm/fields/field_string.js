var Field = require('../base/field.js');
var Field_string = Field.extend({
    init: function(show_name, name, is_must_input) {
        this._super(show_name, name, is_must_input);

        this.typ = "Field_string";
        this.value = '';
        this.default = '';
    },
    init_data: function(value) {
        this._super(value);
    },
    gen_list_html: function() {
        len = this.list_short_len;
        str = this.gen_show_html();
        return str;
    },
    gen_show_html: function() {
        return this.value;
    },
    gen_search_element: function(){

    },
    gen_editor: function(typ, need_require_validator) {
    }
});

module.exports = Field_string;
