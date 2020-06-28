$(document).ready(function () {
    autosize($('textarea'));
});


$("#projectname").change(function() {
    if(document.getElementById("projectname").value != ""){
        $('#task').show();
        if(document.getElementById("taskname").value != ""){
            $('#activity').show();
        }
        else{
            $('#activity').hide();
        }
    }
    else{
        $('#task').hide();
        $('#activity').hide();

    }
    
});


$("#taskname").change(function() {
    if(document.getElementById("taskname").value != ""){
        $('#activity').show();
    }
    else{
        $('#activity').hide();
    }
});


$( document ).ready(function(){
    $("#add").on("click",function(e){
        alert("Time Tracked Successfully.");
    });
});



