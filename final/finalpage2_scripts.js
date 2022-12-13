function currentDateFunction(){
    var todayDate = new Date();
    var month = todayDate.getMonth();
    var year = todayDate.getFullYear();
    var day = todayDate.getDate();
    document.getElementById("currentDate").innerHTML = month + "/" + day + "/" + year;
}

function registrationFunction(){

  var name = document.getElementById("name").value;
  var lastname = document.getElementById("lastname").value;
  var age = document.getElementById("age").value;

    if(age > 10){
      alert("Unfortunately, you are already too old to participate in this program.");}
    else if (age < 4) {
      alert("Unfortunately, you are too young to participate in this program.");}

    else{
      confirm("Registration for " + name + " " + lastname +
        " who is " + age + " years old.");}
  }

function isNumberKey(evt){
      var charCode = (evt.which) ? evt.which : evt.keyCode
      if (charCode > 31 && (charCode < 48 || charCode > 57))
          return false;
      return true;
  }
/*Source of code: https://www.delftstack.com/de/howto/javascript/javascript-only-numbers/#verwendung-von-das-feldattribut-input-und-set-condition-f%25C3%25BCr-keycode-in-javascript */
