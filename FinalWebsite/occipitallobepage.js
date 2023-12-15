function formOutputs1(){
  console.log(document.getElementById("basicText1").value);
  var basicText1js = document.getElementById('basicText1').value;

document.getElementById('answer1box').innerHTML= "newstuff"

if (basicText1js == "Bunny"){
  document.write("I agree").innerHTML = "newstuff"

}else{
   document.write("I do not agree").innerHTML ="newstuff";

}
}

function formOutputs2(){
  console.log(document.getElementById("basicText2").value);
  var basicText2js = document.getElementById('basicText2').value;


if (basicText2js == "Old Couple"){
    document.write("I agree");
}else{
     document.write("I do not agree");

    document.getElementById("answer2").innerHTML;
  }
}


function formOutputs3(){
  console.log(document.getElementById("basicText3").value);
  var basicText3js = document.getElementById('basicText3').value;


  if (basicText3js == "Frog"){
    document.write("I agree");
  }else{
     document.write("I do not agree");


  }
}
