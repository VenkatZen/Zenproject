var fhalf=document.getElementById('firsthalf');
function changename()
{
    var uname=prompt('enter your name');
    localStorage.setItem('name',uname);
    fhalf.textContent='welcome to FLB '+uname;
}
if(!localStorage.getItem('name'))
{
    changename();
}
else{
    var setname=localStorage.getItem('name');
    fhalf.textContent='welcome to FLB '+setname;
}


