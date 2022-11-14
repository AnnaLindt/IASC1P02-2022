function addFunction(){
  var number1 = document.getElementById("number1").value;
  var number2 = document.getElementById("number2").value;
  var rightNumber1 = Number(number1);
  var rightNumber2 = Number(number2);
  var addition = number1 + number2;

  document.getElementById("output").innerHTML= addition;
}
