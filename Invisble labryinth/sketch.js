var caveImg, desertImg
var cave 
function preload(){
caveImg = loadImage("/Images/CAVEIMAGE.jpg")
desertImg = loadImage("/Images/desertimage.jpg")
} 
function setup(){
    createCanvas(1920,920)
    cave = new Cave()
}
function draw(){
background(caveImg)
cave.display()
drawSprites()
}