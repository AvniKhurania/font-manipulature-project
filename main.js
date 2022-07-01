function setup()
{
    video=createCapture(VIDEO);
    video.size=500,500;
    canvas=createCanvas(500,500);

    poseNet=ml5.poseNet(video,modelLoaded);
    poseNet.on('pose',gotPoses);

} 




function modelLoaded()
{
    console.log("PoseNet is initialized");
    
}


function gotPoses(results)
{
    if(results.lenght>0)
    {
        console.log(results);
        nosex=result[0].pose.nose.x;
        nosey=results[0].pose.nose.y;
        console.log("nosex="+nosex+"nosey="+nosey)

        leftWristx=results[0].pose.leftWrist.x;
        rightWristx=results[0].pose.rightWrist.x;

        difference=floor(leftWristx-rightWristx);
        console.log("leftWristx="+leftWristx+"rightWristx="+rightWristx+"difference="+difference);

        
    }
    

}

