function preload(){

}

function setup(){
canvas=createCanvas(400,400);
canvas.center();
video=createCapture(VIDEO);
video.hide();
color=""
}

function draw(){
image(video,0,0,400,400);

}

function take_snapshot(){
    save("shriya.png");
}

