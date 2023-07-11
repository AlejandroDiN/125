noseX=0;
noseY=0;

diference=0;

rigthWristX=0;
leftWristX=0;

function setup()
{
    video= createCapture(VIDEO);
    video.size(600,600);

    canvas=createCanvas(400,400);
    canvas.position(750,150);

    poseNet=ml5.poseNet(video,modelLoaded);
    poseNet.on('pose', gotPoses);
}

function modelLoaded()
{
    console.log('El modelo esta preparado 👍 ');
}

function draw()
{
    background('#00D6A9');

    document.getElementById("square_side").innerHTML="El ancho y el alto del cuadrado es =" + diference +"px";
    fill('#1BE891');
    stroke('#E81B6C');
    square(noseX, noseY, diference);
}

function gotPoses(results)
{
    if(results.lenght>0)
    {
        console.log(results);
        noseX-results[0].pose.nose.x;
        noseY-results[0].pose.nose.y;
        console.log("noseX="+noseX+"noseY="+noseY);

        leftWristX-results[0].pose.leftWrist.x;
        rigthWristX-results[0].pose.rigthWrist.x;
    difference=floor(leftWristX-rigthWristX);
    
    console.log("leftWristX = " + leftWristX + " rightWristX = " + rigthWristX+"diference="+diference);
    }
}