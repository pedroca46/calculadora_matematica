$(document).ready(function() {
    

    var bt_nr = '';

    $('.bt-calc').click(function() {
        var n = $(this).text()
        var bt_nr = $(this).text();

        $('#txt_display').val(bt_nr);

    })
});