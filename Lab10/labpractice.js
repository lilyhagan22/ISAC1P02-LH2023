function theScript(){
  console.log("Hello World");
  document.getElementById("test").innerHTML = "onLoad successful";

  //MATH!
  var aNum = 10;
  var highestNum = Math.max(10.2, 4, 6.6, aNum, 2.7);
  var roundedNum = Math.round(higestNum);
  var sqNum = Math.sqrt(roundedNum);

  document.write(highestNum);
  document.write("</br>");
  document.write(roundedNum);
  document.write("</br>");
  document.write(sqNum);
  document.write("</br>");
  document.write("</br>");

  //RANDOM MATH!!

  var ranNum = Math.random();
  var randOnetoTen = randNum * 10 + 1;
  var randInt = Math.floor(randOnetoTen);

  //Math.floor(Math.random()*n + s);
  //n is number of distinct values in the range
  //s is the loswest number in that range

  document.write(randNum);
  document.write("</br>");
  document.write(randOnetoTen);
  document.write("</br>");
  document.write(randInt);
  document.write("</br>");
  document.write("</br>");



  //LOOPS

  for (i = 1; i<=5; i++){
    document.write("Thw loop for 1 has been excected" + number(i) + "times!")
  }

  document.write("</br>");
  document.write("</br>");

  for (i = 1; i<=randInt; i++){
    document.write("Thw loop for 1 has been excected" + number(i) + "times!")

  }


   document.write("</br>");
   document.write("</br>");

//CONDITIONALS

   var var1 = 5;
   var var2 = 7;

   if (var1 == var2){
     document.write("Numbers are equal");
   }else{
      document.write("Numbers are not equal");
   }

   document.write("</br>");
   document.write("</br>");

      if (var1 > var2){
        document.write("Var 1 larger");
      }else{
         document.write("Var1 smaller");
    }

    document.write("</br>");
    document.write("</br>");

    document.write("</br>");

    if (var1 < var2){
      document.write("VAr 2 larger");
    }else{
       document.write("Var 2 smaller");
  }

  document.write("</br>");
  document.write("</br>");

  document.write("</br>");

    if (var1 > var2){
      document.write("Var 1 larger");
    }else if (var1 < var2){
      document.write("Var 2 larger")
    }else{
      document.write("Numbers equal")
    }

document.write("</br>");
document.write("</br>");

  setTimeout(repeatScript, 1000);

}

function repeatScript(){
  document.write("<div>One Div</div>");
  setTimeout(repeatScript2, 1000);
}

function repeatScript2(){
  document.write("<div>Two Div</div>");
  document.write(Math.floor(Math.random() * 10 +1));
  setTimeout(repeatScript, 1000);

}
