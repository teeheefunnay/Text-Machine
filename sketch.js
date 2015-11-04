
var peter; // this is gonna hold the text file

var thechapter; // this is gonna hold the current chapter

var thefont;

var currentchapter = 0;

function preload() {
  // ignore the bullshit error that happens when you do this:
  peter = loadStrings('peterpan.txt');
  thefont = loadFont('font2.otf'); // loads a font from the disk
}

function setup() {
  createCanvas(800, 600);
  console.log(peter.length); // how long is the file?
  console.log(peter[currentchapter]); // print first line
  thechapter=peter[currentchapter].split(' '); // individual words
  console.log(thechapter);
  textFont(thefont, 18);
  doit();  
}

function draw() {
  background(random(255));
  var xposition = 20;
  var yposition = 50;
  // go through every word in the chapter:
  for(var i = 0;i<thechapter.length;i++)
  {
    // pick a psychedelic color:
    fill(0, 230, 150);
    // figure out how WIDE the word is (plus a space after):
    var tw = textWidth(thechapter[i]+'  ');
    if(xposition+tw>width) // over the edge?
    {
      // yes... move the xposition back the left and move the y position up one line
      xposition = 20; // carriage return
      yposition = yposition + 20; // line feed
    }
    // draw the text
    text(thechapter[i]+'  ', xposition, yposition);
    // increment the xposition
    xposition = xposition + tw;
  }

}

function keyReleased()
{
  currentchapter = (currentchapter+1)%peter.length;
  console.log(peter[currentchapter]); // print the line
  thechapter=peter[currentchapter].split(' '); // individual words
  console.log(thechapter);
}

function doit() 
{

}