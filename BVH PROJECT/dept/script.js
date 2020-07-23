$( document ).ready(function(){
    $(".target").change(function() {
        if(document.getElementById("projectname").value==""){
            $('#task').hide();
        }
        else{
            $('#task').show();
        }  
    });
});
var num = 0;
$( document ).ready(function(){
    $("#nooftask").change(function() {
        num = document.getElementById("nooftask").value;
        if(num>0){
            $('#taskss').empty();
            for(var i = 1;i<=num;i++){
                $('#taskss').append(
                    `<div class="row row-content d-flex align-items-center justify-content-center">  
                        <div class="col-10  mt-2">
                            <label class = " mb-0">Task Name${i}:</label>
                            <input type="text" class="form-control tasksnames" id="taskname${i}" placeholder="Task name${i}">
                        </div>
                        <div class="col-2  mt-2">
                            <label>% for Tasks:</label>
                            <input type="number" class="form-control taskpercents" id="taskpercent${i}" placeholder="0" value = "1" min = "0">
                        </div>
                    </div> 
                   `  
                )
            }
            $('.taskpercents').change(function(){
                var total = 0;
                for(var i =1;i<=num;i++){
                    var x = "taskpercent" + i.toString();
                    if(document.getElementById(x).value<=0){
                        alert("Negative value");
                    }
                    else{
                        total = total + parseFloat(document.getElementById(x).value);
                        console.log(total);
                    }
                }
                if(total == 100){
                    $('#person').show();
                }
                else{
                    $('#person').hide();

                }
            });
        }
        else{
            $('#taskss').empty();
            $('#person').hide();
            alert("Negative values are not allowed.") 
        }
               
    });   
});




$(document).ready(function(){
    $( "#create" ).click(function() {
        alert("created");
    });
});  
