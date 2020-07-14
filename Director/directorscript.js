// Auto size for textarea
$(document).ready(function (){
    autosize($('textarea'));
});
// On click of Add
$( document ).ready(function(){
    $("#create").on("click",function(e){
        alert("Project Created Successfully.");
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

