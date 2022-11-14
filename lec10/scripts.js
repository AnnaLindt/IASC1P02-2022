function addFunction(){
  var number1 = document.getElementById("number1").value;
  var number2 = document.getElementById("number2").value;
  var rightNumber1 = Number(number1);
  var rightNumber2 = Number(number2);

  var addResult = rightNumber1 + rightNumber2;
  document.getElementById("output").innerHTML= addResult;
}

function subFunction(){
  var number1 = document.getElementById("number1").value;
  var number2 = document.getElementById("number2").value;
  var rightNumber1 = Number(number1);
  var rightNumber2 = Number(number2);

  var subResult = rightNumber1 - rightNumber2;
  document.getElementById("output").innerHTML = subResult;
}

function multiplyFunction(){
  var number1 = document.getElementById("number1").value;
  var number2 = document.getElementById("number2").value;
  var rightNumber1 = Number(number1);
  var rightNumber2 = Number(number2);

  var multiplyResult = rightNumber1 * rightNumber2;
  document.getElementById("output").innerHTML = multiplyResult;
}

function divFunction(){
  var number1 = document.getElementById("number1").value;
  var number2 = document.getElementById("number2").value;
  var rightNumber1 = Number(number1);
  var rightNumber2 = Number(number2);

  var divResult = rightNumber1 / rightNumber2;
  document.getElementById("output").innerHTML = divResult;
}
