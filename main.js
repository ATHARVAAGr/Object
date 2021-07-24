video="";
status="";

function preload()
{
    video=createVideo('video.mp4');
    video.hide();
}

function setup()
{
    canvas=createCanvas(700,500);
    canvas.position(450,130);
}

function draw()
{
    image(video, 0, 0, 700, 500);
}

function Start()
{
    objectDetector=ml5.objectDetector('cocossd', modelLoaded);
    document.getElementById("status").innerHTML="status-Detecting objects";
}

function modelLoaded()
{
    console.log("Model is loaded");
    status=true;
    video.loop();
    video.speed(1);
    video.volume(0);
}