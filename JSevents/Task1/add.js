function addition(){
    // Get the data from id1 and assign to n1 variable
    var n1=eval(document.getElementById('id1').value)
    // Get the data from id2 and assign to n2 variable
    var n2=eval(document.getElementById('id2').value)
    var result=n1+n2
    alert(result)
}
function erasedata(){
    //set the data to id1 as empty string
    document.getElementById('id1').value= ""
     //set the data to id2 as empty string
     document.getElementById('id2').value= ""
}