function formOutputs1(){
  console.log(document.getElementById("basicText1").value);
  var basicText1js = document.getElementById('basicText1').value;


if (basicText1js == "Bunny"){
  document.getElementById('answer1box').innerHTML= "I DO Agree";

}else{
  document.getElementById('answer1box').innerHTML= "I DO NOT Agree";


}
}

function formOutputs2(){
  console.log(document.getElementById("basicText2").value);
  var basicText2js = document.getElementById('basicText2').value;


if (basicText2js == "Old Couple"){
  document.getElementById('answer2box').innerHTML= "I DO Agree";
}else{
  document.getElementById('answer2box').innerHTML= "I DO NOT Agree";

  }
}


function formOutputs3(){
  console.log(document.getElementById("basicText3").value);
  var basicText3js = document.getElementById('basicText3').value;


  if (basicText3js == "Frog"){
   document.getElementById('answer3box').innerHTML= "I DO Agree";
  }else{
    document.getElementById('answer3box').innerHTML= "I DO NOT Agree";


  }
}
