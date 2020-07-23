
// Show and Hide for Create button
$( document ).ready(function(){
    $(".target").change(function() {
        if(document.getElementById("projectname").value=="" || document.getElementById("departmentname").value== ""){
            $('#create').hide();
        }
        else{
            $('#create').show();
        }  
    });
});


// On click of Create
$( document ).ready(function(){
    $("#create").on("click",function(e){
        alert("Project created  Successfully.");
    });
});