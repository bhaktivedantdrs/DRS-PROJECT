
// Auto size for textarea
$(document).ready(function (){
    autosize($('textarea'));
});

// search filter by project name
$(document).ready(function(){
    $("#myInput").on("keyup", function(){
        document.getElementById("myInput1").value = '';
        var value = $(this).val().toLowerCase();
        $(".searchdata").filter(function() { 
            $(this).parent().parent().parent().parent().parent().parent().toggle($(this).val().toLowerCase().indexOf(value) > -1)
        }); 
        
    });
});

// search filter by date
$(document).ready(function(){
    $("#myInput1").change(function() {
        document.getElementById("myInput").value = '';
        var value = document.getElementById("myInput1").valueAsDate.toLocaleDateString('en-GB');
        var v = value.split("/");
        value = v[2] + "-" + v[1] + "-" + v[0];
        console.log(value);
        $(".date").filter(function() { 
            $(this).parent().parent().parent().parent().parent().parent().toggle($(this).val().toLowerCase().indexOf(value) > -1)
        });           
    });
});

// Display all
$(document).ready(function(){
    $("#all").click(function(){
        document.getElementById("myInput").value = ''; 
        document.getElementById("myInput1").value = ''; 
        $("#myInput").trigger("keyup");
    });
});
