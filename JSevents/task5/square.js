function square(){
    // Get the data from id1 and assign to a variable
    var a=eval(document.getElementById('id1').value)
    // Get the data from id2 and assign to b variable
    var b=eval(document.getElementById('id2').value)
    var result=(a*a)+(b*b)+ 2*(a*b);
    alert(result)
}
function erasedata(){
    //set the data to id1 as empty string
    document.getElementById('id1').value= ""
     //set the data to id2 as empty string
     document.getElementById('id2').value= ""
}