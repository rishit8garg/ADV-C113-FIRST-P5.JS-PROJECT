function preload(){
}
function setup(){
    canvas = createCanvas(500,400);
    canvas.position(70,200);
    video = createCapture(VIDEO);
    video.hide();
}
function draw(){
    image(video,100,80,300,250);

    stroke(168, 10, 10);
    Fill(168, 10,  10);


    circle(40,40,50);
    circle(460,40,50);
    circle(40,360,50);
    circle(460,360,50);

    stroke(50, 168, 82);
    Fill(50, 168,  82);

    reset(63, 27, 375, 25);
    reset(63, );
}
function take_snapshot(){
    save("frame.png"); 
}