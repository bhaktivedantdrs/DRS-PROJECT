$(document).ready(function () {
    autosize($('textarea'));
});


$(document).ready(function(){
    $("#myInput").on("keyup", function() {
        var value = $(this).val().toLowerCase();
        $(".searchdata").filter(function() { 
            $(this).parent().parent().parent().parent().parent().parent().toggle($(this).val().toLowerCase().indexOf(value) > -1)
        });
    });
});