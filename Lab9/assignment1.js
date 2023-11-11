var start = new Date();
var todayTime = start.getTime();
var todayMonth = start.getMonth() + 1; //Fix for the zero based index
var todayDate = start.getDate();
var todayDay = start.getDay();
var todayHour = start.getHours();
var todayYear = start.getYear();
var todayFullYear = start.getFullYear();

console.log("Full Date:" + start);
console.log("Time:" + todayTime);
console.log("Month" + todayMonth);
console.log("Date:" + todayDate);
console.log("Day:" + todayDay);
console.log("Hour:" + todayHour);
console.log("Year:" + todayYear);
console.log("FullYear:" + todayFullYear);


function stopTime(){

  var stop = new Date();
  var stoptodayTime = stop.getTime();
  var stoptodayMonth = stop.getMonth() + 1; //Fix for the zero based index
  var stoptodayDate = stop.getDate();
  var stoptodayDay = stop.getDay();
  var stoptodayHour = stop.getHours();
  var stoptodayYear = stop.getYear();
  var stoptodayFullYear = stop.getFullYear();

  console.log("Stop Full Date:" + stop);
  console.log("Stop Time:" + stoptodayTime);
  console.log("Stop Month" + stoptodayMonth);
  console.log("Stop Date:" + stoptodayDate);
  console.log("Stop Day:" + stoptodayDay);
  console.log("Stop Hour:" + stoptodayHour);
  console.log("Stop Year:" + stoptodayYear);
  console.log("Stop FullYear:" + stoptodayFullYear);


  var result =((stoptodayTime-todayTime)/1000);
  console.log((stoptodayTime-todayTime)/1000);

  var myAlert = alert("You have been on this page for:" + result);
  console.log(myAlert);

}
