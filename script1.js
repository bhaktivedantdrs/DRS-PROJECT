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


const searchproject = () => {
    let filter = document.getElementById('myinput').value.toUpperCase();
    let ul = document.getElementById('projectname');
    let li = ul.getElementsByTagName('li');
     for(var i=0; i<li.length; i++){
        let a = li[i].getElementsByTagName('a')[0];
        let textValue = a.textContent || a.innerHTML;
        if(textValue.toUpperCase().indexOf(filter) > -1){
            li[i].style.display = '';

        }else{
            li[i].style.display = 'none';
        }
     }
}

const searchexecutor = () => {
    let filter = document.getElementById('my').value.toUpperCase();
    let ul = document.getElementById('Myul');
    let li = ul.getElementsByTagName('li');
     for(var i=0; i<li.length; i++){
        let a = li[i].getElementsByTagName('a')[0];
        let textValue = a.textContent || a.innerHTML;
        if(textValue.toUpperCase().indexOf(filter) > -1){
            li[i].style.display = '';

        }else{
            li[i].style.display = 'none';
        }
     }
}

const searchexecutors = () => {
    let filter = document.getElementById('myin').value.toUpperCase();
    let ul = document.getElementById('myul');
    let li = ul.getElementsByTagName('li');
     for(var i=0; i<li.length; i++){
        let a = li[i].getElementsByTagName('a')[0];
        let textValue = a.textContent || a.innerHTML;
        if(textValue.toUpperCase().indexOf(filter) > -1){
            li[i].style.display = '';

        }else{
            li[i].style.display = 'none';
        }
     }
}
