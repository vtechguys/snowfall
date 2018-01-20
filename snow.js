window.onload=function(){
    //////Canvas getting and context getting here
    var canvas=document.getElementById("canvasSnow");
    var ctx=canvas .getContext('2d');
    ///seting size of canvas
    var W=window.innerWidth;
    var H=window.innerHeight;
    canvas.width=W;
    canvas.height=H;









    function drawGround(){
        console.log("draw ground");
        ctx.fillStyle="white";
        ctx.strokeStyle="green";
        ctx.beginPath();
        ctx.moveTo(0,H+550);
        ctx.fillRect(0,H-50,W,50);
        // ctx.arc(120,H+550,H,0,Math.PI*2,false);
        // ctx.moveTo(250,H+550);
        // ctx.arc(350,H+550,H,0,Math.PI*2,false);
        // ctx.moveTo(W-100,H+550);
        // ctx.arc(W-70,H+515,H,0,Math.PI*2,false);
        // ctx.stroke();
        ctx.fill();
        //console.log(ctx);
        // ctx.closePath();
    }

    
    function drawBody(){
        ctx.strokeStyle="black";
        ctx.fillStyle="white";
        ctx.beginPath();
        ctx.moveTo(120,H-80);//footer
        ctx.arc(120,H-80,60,0,Math.PI*2,false);
        ctx.moveTo(120,H-150)
        ctx.arc(110,H-150,50,0,Math.PI*2,false);
        ctx.moveTo(120,H-225)
        ctx.arc(100,H-225,40,0,Math.PI*2,false);
        ctx.stroke();
        ctx.fill();
        ctx.closePath();
    }
    function drawEyes(){
        ctx.beginPath();
        ctx.fillStyle="black";
        ctx.moveTo(120,H-240)
        ctx.arc(120,H-240,5,0,Math.PI*2,false);
        ctx.fillStyle="black";
        ctx.moveTo(120,H-240)
        ctx.arc(80,H-235,5,0,Math.PI*2,false);
        ctx.fill();
        ctx.closePath();
    }
 function drawNose(){
    
ctx.beginPath();
ctx.moveTo(105, H-230);
ctx.lineTo(130, H-237);
ctx.lineTo(105,H-220);
ctx.closePath();
 
// the outline
ctx.lineWidth = 1;
ctx.strokeStyle = '#666666';
ctx.stroke();
 
// the fill color
ctx.fillStyle = "#FFCC00";
ctx.fill();
 }
function drawSmile(){
    ctx.beginPath();
    ctx.arc(105,H-220,20,Math.PI/6,(Math.PI*(2/3)),false);
    ctx.strokeStyle="black";
    ctx.stroke();
}



    function drawSnowMan(){
       drawBody();
       drawEyes();
       drawNose();
       drawSmile();
    }

    






    ///max Flakes on screen 
    var MAXFLAKES=100;
    var flakes=[];////array of snow flakes
    ///initilising arry of snow flakes
    for(var i=0;i<MAXFLAKES;i++){
        flakes.push({
            x:Math.random()*W,
            y:Math.random()*H,
            ///density of flakes for more heavier fall earlier
            density:Math.random()*5 +2,///range 2 to 7
            radius:Math.random()*3+1
        });
    }
    ///drawing flakes on screen
    function drawFlakes(){
        console.log("drawFlakes");
        ctx.clearRect(0,0,W,H);
        ctx.fillStyle="white";
        ctx.beginPath();
        for(var i=0;i<MAXFLAKES;i++){
            var flake=flakes[i];
            ctx.moveTo(flake.x,flake.y);// to to position on screen
            ctx.arc(flake.x,flake.y,flake.radius,0,Math.PI*2,true);//cw circle drawing
        }
        ctx.fill();
        moveFlake();
        drawSnowMan();
        drawGround();
        
    }


    /////animating flake
    var angle=0;//  this is required to move flake in a windy effect to and fro
    function moveFlake(){
        angle+=0.01;
        for(var i=0;i<MAXFLAKES;i++){
            var flake=flakes[i];
            ///snow flake position changing
            flake.y+=Math.pow(flake.density,2)+1;
            flake.x+=Math.sin(angle)*2;
            ///when snow flake reaches bottom of window replacing by new obj;
            if(flake.y>H){
                console.log(flakes[i].y);
                flakes[i]={
                    x:Math.random()*W,
                    y:0,
                    density:flake.density,
                    radius:flake.radius
                }
                console.log(flakes[i].y);
            } 

        }

    }
  setInterval(drawFlakes,50); 

    


}