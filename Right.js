function Rightmove(id)
{
    var righttext=document.getElementById("right");
    if(righttext.value=="straight"||righttext.value=="Straight"||righttext.value=="STRAIGHT")
        {
            alert("Finally reached the hotel");
            window.location='End.html';
/*var XY=document.getElementById("Straight").style.display = "block";*/
            
        }
    
else if(righttext.value=="right"||righttext.value=="Right"||righttext.value=="RIGHT")
        {
                var YX=document.getElementById("Right").style.display = "block";

        }
    
    else if(righttext.value=="LEFT"||righttext.value=="Left"||righttext.value=="left")
        {
                var YX=document.getElementById("Left").style.display = "block";

        }
    else if(righttext.value=="")
        {
            alert("Please enter value i.e. \n Staright/Right/Left");
            window.location.reload();
        }
}           