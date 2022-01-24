img = "";

function preload()
{
    img = loadImage('ele.jpg');
}

function setup()
{
    canvas = createCanvas(650, 500);
    canvas.center();
}


function draw()
{
    image(img, 0, 0, 650, 500);

    fill("#00f0000");
    text("Airpords", 535, 235);
    noFill();
    stroke("#00f0000");
    rect(535, 240, 80, 105);

    fill("#268714")
    text("I-Watch",70, 100);
    noFill();
    stroke("#268714");
    rect(70, 105, 50, 400);

    fill("#d15fd9")
    text("MacBook",135, 105);
    noFill();
    stroke("#d15fd9");
    rect(135, 110, 400, 390);
}

function back()
{
    window.location = "index.html";
}