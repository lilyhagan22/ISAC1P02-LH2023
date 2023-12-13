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
