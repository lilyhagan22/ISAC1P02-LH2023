function formOutputs(){
  console.log(document.getElementById("inputOne").value);
  console.log(document.getElementById("inputTwo").value);


  var numOne = Number(document.getElementById("inputOne").value);
  var numTwo = Number(document.getElementById("inputTwo").value);

  document.getElementById("result").innerHTML=(numOne + numTwo);
}
