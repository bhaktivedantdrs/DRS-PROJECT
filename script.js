
// Auto size for Textarea
$(document).ready(function () {
    autosize($('textarea'));
});


// Display project-task-activity
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


// Show and Hide for Add button
$( document ).ready(function(){
    $(".target").change(function() {
        if(document.getElementById("activityname").value=="" || document.getElementById("tag").value== "" || document.getElementById("starttime").value=="" || document.getElementById("endtime").value=="" || document.getElementById("date").value =="" || document.getElementById("comment").value==""){
            $('#add').hide();
        }
        else{
            $('#add').show();
        }  
    });
});


// On click of Add
$( document ).ready(function(){
    $("#add").on("click",function(e){
        alert("Time Tracked Successfully.");
    });
});



