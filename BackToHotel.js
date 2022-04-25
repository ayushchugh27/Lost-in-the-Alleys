function typed(id)
{
    var a=document.getElementById("TypeDirection").style.display = "block";
}
function checkleftright(id)
{
    var text1=document.getElementById("leftright");
    if(text1.value=="left"||text1.value=="Left"||text1.value=="LEFT")
        {
             location.href="left.html"
        }
    else if(text1.value=="right"||text1.value=="Right"||text1.value=="RIGHT")
        {
            location.href="right.html"
        }
}
function leftmove(id)
{
    var lefttext=document.getElementById("left");
    if(lefttext.value=="straight"||lefttext.value=="Straight"||lefttext.value=="STRAIGHT")
        {
    var XY=document.getElementById("straightdirection").style.display = "block";

        }
    else if(lefttext.value=="right")
        {
                var YX=document.getElementById("Rightdirection").style.display = "block";

        }
    else if(lefttext.value=="")
        {
            alert("Please enter value i.e. \n Staright/Right");
            window.location.reload();
        }
}           


function straight(id)
{
        var straighttext=document.getElementById("StraightD");
    if(straighttext.value=="Right"||straighttext.value=="right"||straighttext.value=="RIGHT")
        {
            /*var aY=document.getElementById("RightStraight").style.display = "block";*/
            alert("Finally reached Hotel");
            window.location='End.html'
        }
    else if(straighttext.value=="Left"||straighttext.value=="left"||straighttext.value=="LEFT")
        {
                var bX=document.getElementById("LeftStraight").style.display = "block";

        }
    else if(straighttext.value=="")
        {
            alert("Please enter value i.e. \n Left/Right");
            window.location.reload();
        }
}

function right(id)
{
        var Righttext=document.getElementById("RightD");
    if(Righttext.value=="Right"||Righttext.value=="right"||Righttext.value=="RIGHT")
        {
            var YY=document.getElementById("RightRight").style.display = "block";
            
        }
    else if(Righttext.value=="Straight"||Righttext.value=="straight"||Righttext.value=="STRAIGHT")
        {
              /*  var XX=document.getElementById("RightStraight").style.display = "block";*/
 alert("Finally reached Hotel");
            window.location='End.html'
        }
    else if(straighttext.value=="")
        {
            alert("Please enter value i.e. \n Left/Right");
            window.location.reload();
        }
}
