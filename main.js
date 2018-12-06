/*var hhead=document.querySelector('h1');
hhead.onclick=display;
function display()
{
    hhead.textContent=welcome;
    alert('text have been changed');
}*/
var myimage=document.querySelector("img");
myimage.onclick=imagechange;
function imagechange()
{
    var imgsrc=myimage.getAttribute('src');
    if(imgsrc==='android.png')
    {
        myimage.setAttribute('src','bb.jpeg');
        var para=document.querySelector('p');
        para.textContent="blackberry";
    }
    else{
        myimage.setAttribute('src','android.png');
        
    }
}
var mybutton=document.querySelector('button');
var myheading=document.querySelector('h1');
function setusername()
{
    var uname=prompt("enter your name");
    localStorage.setItem('name',uname);
    myheading.textContent="welcome to this web "+uname;
}
if(localStorage.getItem('name'))
{
   setusername();
}
else{
    var storedname=localStorage.getItem('name');
    myheading.textContent="welcome to this web "+storedname;
}
mybutton.onclick=function()
{
    setusername();
}
var show=document.querySelector('p');
show.onclick=display;
function display()
{
    show.style.color='red';
}