function preload(){
    image=loadImage("https://www.planetware.com/wpimages/2020/02/france-in-pictures-beautiful-places-to-photograph-eiffel-tower.jpg");
}

function setup(){
    canvas=createCanvas(300,400);
    canvas.center();
    video=createCapture(VIDEO);
    video.hide();
    

}

function draw(){
    image(video,130,140,400,300);
    fill(200,6,78);
    stroke(255,255,255);
}