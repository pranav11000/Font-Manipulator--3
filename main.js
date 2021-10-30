difference = 0;
rightWristX = 0;
leftWristX = 0;
function setup() 
{
    video = createCapture(VIDEO);
    video.size(550, 500);
  
    canvas = createCanvas(550, 400);
    canvas.position(560,135);

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function modelLoaded()
{
console.log('Model Loaded!');
}
function gotPoses(results)
{
    if (results.length > 0)
    {
    console.log(results);
    
    leftWristX= results[0].pose.leftWrist.x;
    rightWristX = results[0].pose.rightWrist.x;
    difference = floor(leftWristX - rightWristX);
    }
}

function draw()
{
background('#808080');
document.getElementById("font_size").innerHTML = "font size of the text will be =" + difference + "px";
textSize(difference);
fill('#32CD32');
text('Pranav', 560, 135);
}