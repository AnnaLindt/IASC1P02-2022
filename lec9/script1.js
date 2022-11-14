var start = new Date();

function stopTime(){
  var stop = new Date();
  var passedMilli = stop.getTime() - start.getTime();
  var passed = passedMilli / 600;
  alert("You have been on the page for: " +  passed + " seconds");

}
