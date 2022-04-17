Status = "";

function preload()
{
    img = loadImage("fruitilicious-basket-9932240co.webp");
}
function setup()
{
    canvas = createCanvas(650,560);
    canvas.center();

  objectDetector = ml5.objectDetector('cocossd', modelLoaded);
  document.getElementById("status").innerHTML = "Detecting objects ";
}