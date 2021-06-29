function setup(){
    canvas = createCanvas(500, 500)
    canvas.position(0, 0)
    video = createCapture(VIDEO)
}

function draw() {
    image(video, 500, 500, 500, 500)
     
    fill(200, 0, 0);
    stroke(255, 0 ,0);
    circle(30, 30, 40);

    fill(200, 0, 0);
    stroke(255, 0 ,0);
    circle(450, 30, 40);

    fill(200, 0, 0);
    stroke(255, 0 ,0);
    circle(30, 450, 40);

    fill(200, 0, 0);
    stroke(255, 0 ,0);
    circle(450, 450, 40)

    fill(200, 0, 0);
    stroke(255, 0 ,0);
    rect(40, 20, 400, 20);

    fill(200, 0, 0);
    stroke(255, 0 ,0);
    rect(40, 440, 400, 20);

    fill(200, 0, 0);
    stroke(255, 0 ,0);
    rect(20, 40, 20, 400);

    fill(200, 0, 0);
    stroke(255, 0 ,0);
    rect(450, 40, 20, 400);
}