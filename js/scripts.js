$(document).ready(function() {
    var bt_nr = '';

    $('.bt-calc').click(function() {
        var n = $(this).text()

        if (n == '0' || n == '00') {
            alert('1')
            if (bt_nr.length > 0) {
                bt_nr = bt_nr.concat(n);
            }
        } else {
            bt_nr = bt_nr.concat(n);
        }

        $('#txt_display').val(bt_nr);
    })
});