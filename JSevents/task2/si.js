function si(){
    // Get the data from id1 and assign to p variable
    var p=eval(document.getElementById('id1').value)
    // Get the data from id2 and assign to t variable
    var t=eval(document.getElementById('id2').value)
    // Get the data from id3 and assign to r variable
    var r=eval(document.getElementById('id3').value)
    var si=p*t*r/100
    alert(si)
}
function erasedata(){
    //set the data to id1 as empty string
    document.getElementById('id1').value= ""
     //set the data to id2 as empty string
     document.getElementById('id2').value= ""
     //set the data to id3 as empty string
     document.getElementById('id3').value= ""
}