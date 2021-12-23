objects=[];
status_object="";
function preload(){
video=createVideo("video.mp4");
}

function setup(){
canvas=createCanvas(480,380);
canvas.center();
video.hide();
}

function draw(){
image(video,0,0,480,380);
if(status_object!=""){
    object_detector.detect(video,gotResult);
    for(var i=0; i<objects.length; i++){
document.getElementById("status_objects").innerHTML="status:objects detected";
document.getElementById("number_of_objects").innerHTML="number of objects detected are -"+objects.length;

fill("orange");
percent=floor(objects[i].confidence*100);
text(objects[i].label+" "+percent+"%",objects[i].x+15,objects[i].y+15);
noFill();
stroke("orange");
rect(objects[i].x,objects[i].y,objects[i].width,objects[i].height);
    }
}
}

function gotResult(error,results){
    if(error){
        console.log(error);
    }
    console.log(results);
objects=results;

}


function start(){
    object_detector=ml5.objectDetector("cocossd",modelLoaded);
    document.getElementById("status_objects").innerHTML="status: detecting objects";
}

function modelLoaded(){
    console.log("model Loaded");
    status_onject=true;
    video.loop();
    video.speed(1);
    video.volume(0);
}