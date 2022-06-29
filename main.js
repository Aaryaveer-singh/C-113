tint_colour="";

function setup(){
    canvas=createCanvas(500,500);
    video=createCapture(VIDEO);
    video.hide();
}

function draw(){
    image(video,0,0,500,500);  
    tint(tint_colour);
    circle(365,120,50);
    rect(150,50,200,50);
    circle(135,120,50);
    rect(150,140,200,50);
}


function apply_filter(){
    tint_colour=document.getElementById("tint_colour").value;
}

function take_snapshot(){
    save("mypic.png");
}
