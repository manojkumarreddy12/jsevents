function cube(){
    // Get the data from id1 and assign to a variable
    var num=eval(document.getElementById('id1').value)
    var cube=num*num*num
    alert(cube)
}
function erasedata(){
    //set the data to id1 as empty string
    document.getElementById('id1').value= ""
}