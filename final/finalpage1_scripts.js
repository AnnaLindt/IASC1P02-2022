var dayA = "Jyrki / Yorick / Alea / Georg / Herbert Ludwig / Juri ";
var dayB = "Tasso / Wilbirg / Damasus / Gian Luca / Tassilo / Lynn ";
var dayC = "Jeannette / Joanne / Astrid / Dietrich / Geovana";
var dayD = "Wieslaw / Wladislaw / Jodokus / Tilia / Vladislav";
var dayE = "Dusanka / Francesca / Bertoldo / Francie / Bertold";
var dayF = "Ginger / Christelle / Kirsten / Virginia / Gioia / Kristen";
var dayError = "Please enter a different date! (between 10 and 15)";


function namedayFunction(){
  var currentDate = document.getElementById("date").value;
  if (currentDate == 10) {document.getElementById("namesdayOutput").innerHTML = dayA;}
  else if (currentDate == 11) {document.getElementById("namesdayOutput").innerHTML = dayB;}
  else if (currentDate == 12) {document.getElementById("namesdayOutput").innerHTML = dayC;}
  else if (currentDate == 13) {document.getElementById("namesdayOutput").innerHTML = dayD;}
  else if (currentDate == 14) {document.getElementById("namesdayOutput").innerHTML = dayE;}
  else if (currentDate == 15) {document.getElementById("namesdayOutput").innerHTML = dayF;}
  else {document.getElementById("namesdayOutput").innerHTML = dayError;}
  }

function showNews(){
  alert("We will be closed over the Christmas holidays from December 22th to January 6th.");
  }
