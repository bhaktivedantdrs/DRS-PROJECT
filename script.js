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
    $("#create").on("click",function(e){
        alert("Project Created Successfully.");
    });
});

// On click of Download File
function download(file, text) { 
              
                //creating an invisible element 
                var element = document.createElement('a'); 
                element.setAttribute('href',  
                'data:text/plain;charset=utf-8, ' 
                + encodeURIComponent(text)); 
                element.setAttribute('download', file); 
              
                // Above code is equivalent to 
                // <a href="path of file" download="file name"> 
              
                document.body.appendChild(element); 
              
                //onClick property 
                element.click(); 
              
                document.body.removeChild(element); 
            } 
              
            // Start file download. 
            document.getElementById("btn") 
            .addEventListener("click", function() { 
                // Generate download of hello.txt  
                // file with some content 
                var text = document.getElementById("text").value ; 
                var filename = "work.txt"; 
              
                download(filename, text); 
            }, false); 


function download(file, text) { 
              
                //creating an invisible element 
                var element = document.createElement('a'); 
                element.setAttribute('href',  
                'data:text/plain;charset=utf-8, ' 
                + encodeURIComponent(text)); 
                element.setAttribute('download', file); 
              
                // Above code is equivalent to 
                // <a href="path of file" download="file name"> 
              
                document.body.appendChild(element); 
              
                //onClick property 
                element.click(); 
              
                document.body.removeChild(element); 
            } 
              
            // Start file download. 
            document.getElementById("btn") 
            .addEventListener("click", function() { 
                // Generate download of hello.txt  
                // file with some content 
                var text = document.getElementById("text").value ; 
                var filename = "work.txt"; 
              
                download(filename, text); 
            }, false); 

