var Front = function(){

};
Front.prototype.domClear = function(domName){
    $(domName).html('');
};
Front.prototype.tableInsert = function(domName,key,data){
    var _html = '<tr id="tr_'+key+'">';
    for (var k in data){
        _html += '<td>'+data[k]+'</td>';
    }
    _html += '</tr>';
    $(domName).append(_html);
};
