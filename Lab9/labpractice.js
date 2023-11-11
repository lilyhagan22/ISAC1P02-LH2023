console.log("Hello World")

function buttonClick(){
console.log("the button has been clickied gasp");
}

var todayFullDate = new Date();
var todayTime = todayFullDate.getTime();
var todayMonth = todayFullDate.getMonth() + 1; //Fix for the zero based index
var todayDate = todayFullDate.getDate();
var todayDay = todayFullDate.getDay();
var todayHour = todayFullDate.getHours();
var todayYear = todayFullDate.getYear();
var todayFullYear = todayFullDate.getFullYear();

console.log("Full Date:" + todayFullDate);
console.log("Time:" + todayTime);
console.log("Month" + todayMonth);
console.log("Date:" + todayDate);
console.log("Day:" + todayDay);
console.log("Hour:" + todayHour);
console.log("Year:" + todayYear);
console.log("FullYear:" + todayFullYear);

function displayDate(){
  document.getElementById("theDate").innerHTML = String(todayDate) + "/" + String(todayMonth) + "/" + String(todayFullYear);
}

console.log(6 + 8 + "five" + 4 + 3);
console.log(1 + 2 + 3 + "4" + 5);


//POPUPS

var myAlert = alert("Danger Will Robinson");
console.log(myAlert);

var myConfirm = confirm("Is this todays date?" + todayDate);
console.log(myConfirm);

var myPrompt = prompt("Who is your fav celeb?");
console.log(myPrompt)

function formOutputs(){
  console.log(document.getElementById("basicText").value);
  console.log(document.getElementById("basicPass").value);
  console.log(document.getElementByName("radioInput").value);
}
