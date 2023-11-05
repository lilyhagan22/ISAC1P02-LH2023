var numX, numY;
numX=0;
numY=0;

var numZ=0;

document.write("Hello World!");
console.log("wrote hello world");

function function1(){
  document.getElementByID("f1Ref").innerHTML="Looke it worked";
  document.getElementByID("f1Ref").style.color="green";

  console.log("made f1 contents green and overwrote them");
}

function changeIntro(){
  document.getElementByID("annoy").style.color="red";
  console.log("made my annoying into red");
}

function addxandy(){
  document.getElementByID("result").innerHTML=(numX+numY);
}

function incX(){
  numX++;
  document.getElementByID("result").innerHTML=(numX);
}

function incX(){
  numY++;
  document.getElementByID("result").innerHTML=(numY);
}
