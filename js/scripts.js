$(document).ready(function() {
    
    var nr_c = "";

    $('.bt-calc').click(function() {
    
        if (nr_c.length < 25) {
            var nr = $(this).text();

            nr_c = nr_c.concat(nr);

            $('#txt_display').text(nr_c);
        }
    });