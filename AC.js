img = "";

function preload()
{
    img = loadImage('ac.jpg');
}

function setup()
{
    canvas = createCanvas(650, 500);
    canvas.center();
}


function draw()
{
    image(img, 0, 0, 650, 500);

    fill("#ff0000");
    text("Air Conditioner", 90, 75);
    noFill();
    stroke("#ff0000");
    rect(90, 80, 550, 240);

    fill("#ff0000")
    text("Clock",30, 295);
    noFill();
    stroke("#ff0000");
    rect(30, 300, 200, 200);
}

function back()
{
    window.location = "index.html";
}