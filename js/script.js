let img;
function preload() {
    img = loadImage('image.jpg');
}
function setup() {
    createCanvas(1000,600);
    background(0)
    image(img, 100, 100);
}
function draw() {
    drawSprites();
}
