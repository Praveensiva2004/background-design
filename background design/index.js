
        let c=0
        function a(){
            c=c+1;
            if(c>5)
        {
            c=1;
        }
        switch(c)
        {
          
            case 1:{
                document.getElementById("box1").style="background-color:blue";
                document.getElementById("txt01").textContent="Background Color:blue";
                break;
            }
            case 2:{
                document.getElementById("box1").style="background-color:green";
                document.getElementById("txt01").textContent="Background Color:green";
                break;
            }
            case 3:{
                document.getElementById("box1").style="background-color:black";
                document.getElementById("txt01").textContent="Background Color:black";
                break;
            }
            case 4:{
                document.getElementById("box1").style="background-color:red";
                document.getElementById("txt01").textContent="Background Color:red";
                break;
            }
            case 5:{
                document.getElementById("box1").style="background-color:greenyellow";
                document.getElementById("txt01").textContent="Background color:greenyellow";
                break;
            }
        }
        }
        
        
       
