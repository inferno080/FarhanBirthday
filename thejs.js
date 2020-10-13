var c = 0;

function f1()
{   
    //document.getElementById("fun1").style.display = "none"  ;
    c = c + 1;
    if (c==1)
    {   
        
        setTimeout((function (){   
            document.getElementById("fun1").style.display = "none"  ;
        }), (1700))
    }
    else
    {
        alert("You have clicked on the wrong apparatus. Please follow the instructions given above.Refresh to avoid errors");
    }
}

function f2()
{   
    c = c + 1 ;
    if (c==2)
    {
        setTimeout((function (){
            document.getElementById("fun2").style.display = "none";
        }), (1700))
    }
    else
    {
        alert("You have clicked on the wrong apparatus. Please follow the instructions given above.Refresh to avoid errors");
    }
}

function f3()
{   
    c = c + 1
    if (c==3)
    {
        setTimeout((function (){
            document.getElementById("fun3").style.display = "none";
            document.getElementById("flame").style.display = "none";
        }), (1700))
    }
    else
    {
        alert("You have clicked on the wrong apparatus. Please follow the instructions given above.Refresh to avoid errors");
    }
}

function f4()
{   
    c = c + 1
    if (c==4)
    {   
        setTimeout((function (){
            document.getElementById("fun4").style.display = "none";
            //document.getElementById("flame").style.display = "none";
        }), (1700))
        setTimeout((function (){
            document.getElementById("fun5").style.display = "none";
        }), (3200))
        setTimeout((function (){
            window.open('index2.html', '_blank');
        }), (3900))
    }
    else
    {
        alert("You have clicked on the wrong apparatus. Please follow the instructions given above.Refresh to avoid errors");
    }
}



