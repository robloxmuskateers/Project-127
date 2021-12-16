Hsong = "";
Psong = "";

function preload() {
    Hsong = loadSound("HarryPotter.mp3");
    Psong = loadSound("PeterPan.mp3");
}

function setup() {
    canvas = createCanvas(600, 500);
    canvas.center();

    video = createCapture(VIDEO);
    video.hide();
}

function draw() {
    image(video, 0, 0, 600, 500);
}