var age = prompt("What is your age?");

var ageNumber = Number(age);
var currentDate = new Date();
var currentYear = currentDate.getFullYear();
var birthYear = currentYear - ageNumber;

document.write(birthYear);
