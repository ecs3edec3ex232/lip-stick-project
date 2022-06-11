noseY = 0;
noseX = 0; 

function preload(){
lip_stick = loadImage("https://i.postimg.cc/PxFvYgkv/l1.png");
}

function setup(){
    canvas = createCanvas(300, 300);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(300, 300);
    video.hide();

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function draw(){
    image(video, 0, 0, 300, 300);
    image(lip_stick, noseX, noseY, 30, 30);
}

function Take_Snapshot(){
    save('photo_with_lipstick.jpeg');
}

function modelLoaded(){
    console.log("poseNet is initialized");
}

function gotPoses(results){
    if( results.length > 0){
        console.log(results);
        noseX = results[0].pose.nose.x - 15; 
        noseY = results[0].pose.nose.y + 10;
        console.log("lipstick x =" + noseX);
        console.log("lipstick y =" + noseY);
    }
}